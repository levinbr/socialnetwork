import React, {useState} from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusHook from "./ProfileStatusHook";
import userPhoto from "../../../img/user.jpg";
import ProfileDescriptionForm from "./ProfileDescriptionForm";


const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) { return <Preloader /> }

    const onAvatarPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.saveAvatarPhoto(e.target.files[0]);
        };
    }
    const onSubmit = (formData) => {
        props.saveProfileDescription(formData)
            //toDo: избавиться от then.
            .then(() => setEditMode(false))

    }

    return (
        <div className={style.profileInfo}>

            <img src={props.profile.photos.large || userPhoto } />
            {props.isOwner && <input type={'file'} onChange={onAvatarPhotoSelected} />}

            { editMode
                ? <ProfileDescriptionForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                : <ProfileDescription profile={props.profile}
                                      isOwner={props.isOwner}
                                      goToEditMode={() => setEditMode(true)}/> }

            <ProfileStatusHook status={props.status} updateUserStatus={props.updateUserStatus}/>
        </div>

    )

}

const ProfileDescription = (props) => {
    return (
        <div>
            { props.isOwner && <button onClick={props.goToEditMode}> Edit </button> }
            <div>
                <b> Full name: </b> {props.profile.fullName}
            </div>
            <div>
                <b> Looking for a job: </b> {props.profile.lookingForAJob ? "Yes" : "No"}
            </div>
            { props.profile.lookingForAJob &&
            <div>
                <b> My skills: </b> {props.profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b> About me: </b> {props.profile.aboutMe}
            </div>
            <div>
                <b> Contacts: </b> {Object.keys(props.profile.contacts).map((key) => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            }) }
            </div>
        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div> <b> {contactTitle} :</b> {contactValue} </div>
}
export default ProfileInfo;