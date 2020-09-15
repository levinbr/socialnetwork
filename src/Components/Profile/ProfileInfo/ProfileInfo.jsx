import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusHook from "./ProfileStatusHook";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader />
        )
    }
    return (
        <div className={style.profileInfo}>
            <img src={props.profile.photos.large} />
            <div>
                {props.profile.aboutMe}
                {props.profile.fullName}
                {props.profile.vk}
            </div>
            <ProfileStatusHook status={props.status} updateUserStatus={props.updateUserStatus}/>
        </div>

    )

}

export default ProfileInfo;