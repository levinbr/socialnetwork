import React from 'react';
import s from './Post.module.css'
import userPhoto from '../../../../img/user.jpg'
const Post = (props) => {
  return (
      <div className={s.post}>
        <div className={s.item}>
          <img src={props.photoOwner || userPhoto} alt={'Photo_owner'}/>
          {props.message}
        </div>
        <div>
          <span> Likes {props.likes} </span>
        </div>
      </div>
  );
}

export default Post;
