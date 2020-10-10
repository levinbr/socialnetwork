import React, {useState} from 'react'
import s from './ProfileInfo.module.css'
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
        <div className={s['profile']}>
            <div className={s['profile-status']}>
                <ProfileStatusHook status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
            <div className={s['avatar']}>

                {props.isOwner ? <label className={s['owner']}>
                                     <input className={s['owner-hide']} type={'file'} name="avatar" accept=".jpg, .jpeg, .png"
                                             onChange={onAvatarPhotoSelected} />
                                     <img src={props.profile.photos.large || userPhoto } />
                                 </label>
                               : <img src={props.profile.photos.large || userPhoto } />
                }

            </div>
                <div className={s['profile-description']}>
                    { editMode
                        ? <ProfileDescriptionForm initialValues={props.profile} profile={props.profile}
                                                  onSubmit={onSubmit}/>
                        : <ProfileDescription profile={props.profile}
                                              isOwner={props.isOwner}
                                              goToEditMode={() => setEditMode(true)}/> }
                </div>
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