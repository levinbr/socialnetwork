import React from 'react';
import styles from './Post.module.css'

const Post = (props) => {
  return (
      <div className={styles.post}>
        <div className={styles.item}>
          <img src='https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg' />
          {props.message}
        </div>
        <div>
          <span> Likes {props.likes} </span>
        </div>
      </div>
  );
}

export default Post;
