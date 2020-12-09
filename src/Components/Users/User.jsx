import React from 'react';
import s from './User.module.css'
import cn from 'classnames'
import userPhoto from "../../img/user.jpg";
import {NavLink} from "react-router-dom";

const User = (props) => {
    const user = props.user;
    return (

        <div className={s['container']}>
            <div className={s['card']}>
                <div className={cn(s['face'],s['face1']) }>
                    <div className={s['content']}>
                        <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small || userPhoto} alt={'user_photo'} />
                        </NavLink>
                        <h3> {user.name} </h3>
                    </div>
                </div>
                <div className={cn(s['face-sub'],s['face2']) }>
                    <div className={s['content']}>
                        {user.followed
                            ? <input className={s['unfollow']} type={'button'} value={'unfollow'} onClick={() => {props.unFollow(user.id)}}
                                     disabled={props.followingProgress.some(id => id === user.id)} />
                            : <input className={s['follow']} type={'button'} value={'follow'} onClick={() => {props.follow(user.id)}}
                                     disabled={props.followingProgress.some(id => id === user.id)} />
                        }
                    </div>
                </div>
            </div>

        </div>

    )
}

export default User;