import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    saveAvatarPhoto,
    saveProfileDescription,
    updateUserStatus
} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
            || this.props.authorizedUserID
            || this.props.history.push("/login");
        if (userId) {
            this.props.getUserProfile(userId)
            this.props.getUserStatus(userId)
        }
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId ) {
            this.refreshProfile();
        };
    }

    render() {
        return <Profile {...this.props}
                        isOwner={!this.props.match.params.userId}
                        saveAvatarPhoto={this.props.saveAvatarPhoto} />
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
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, saveAvatarPhoto, saveProfileDescription}),
    withRouter,
)(ProfileContainer);
