import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
 
  return (
      <div className={styles.content}>
          <ProfileInfo profile={props.profile}
                       status={props.status}
                       updateUserStatus={props.updateUserStatus}
                       isOwner={props.isOwner}
                       saveAvatarPhoto={props.saveAvatarPhoto}
                       saveProfileDescription={props.saveProfileDescription} />

          <MyPostsContainer/>
      </div>
  );
}

export default Profile;
