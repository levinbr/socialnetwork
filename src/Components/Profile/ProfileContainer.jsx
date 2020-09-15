import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
            || this.props.authorizedUserID
            || this.props.history.push("/login");
        if (userId) {
            this.props.getUserProfile(userId)
            this.props.getUserStatus(userId)
        }

    }
    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserID: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer);
