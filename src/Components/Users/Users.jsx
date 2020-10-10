import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {

    return <div>
        <Paginator currentPage={props.currentPage}
                   onChangePage={props.onChangePage}
                   totalItems={props.totalUsers}
                   pageSize={props.usersCount} />
        {
            props.users.map(u => <User key={u.id}
                                       user={u}
                                       followingProgress={props.followingProgress}
                                       unFollow={props.unFollow}
                                       follow={props.follow}

            />

        )}
    </div>
}

export default Users;