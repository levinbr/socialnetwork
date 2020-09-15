import React from 'react';
import styles from './Users.module.css'
import userPhoto from "../../img/user.jpg";
import {NavLink} from "react-router-dom";

const User = (props) => {
    const user = props.user;
    return <div>
                <span>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small || userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {
                                    props.unFollow(user.id)
                                }}> unfollow </button>
                            : <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {
                                    props.follow(user.id)
                                }}> follow </button>}
                    </div>
                </span>
                <span>
                    <div> {user.name} </div>
                    <div> {user.status} </div>
                    <div> {user.country + ', ' + user.city} </div>
                    </span>
            </div>

}

export default User;