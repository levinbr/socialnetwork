import React from 'react';
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage,
    setFollowingProgress,
    unFollow
} from "../../Redux/users-reducers";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsProgress,
    getTotalUsers,
    getUsersSelector,
    getUsersCount
} from "../../Redux/users-selector";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.usersCount, this.props.currentPage);
    }

    onChangePage = (pageNumber) => {
        this.props.requestUsers(this.props.usersCount, pageNumber);
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isProgress ? <Preloader /> : null}
            <Users totalUsers={this.props.totalUsers}
                   usersCount={this.props.usersCount}
                   onChangePage={this.onChangePage}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   followingProgress={this.props.followingProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state) ,
        currentPage: getCurrentPage(state),
        totalUsers: getTotalUsers(state),
        usersCount: getUsersCount(state),
        isProgress: getIsProgress(state),
        followingProgress: getFollowingProgress(state)
    }
}

export default connect(mapStateToProps,
    {follow, unFollow, setCurrentPage, setFollowingProgress, requestUsers})(UsersContainer);

