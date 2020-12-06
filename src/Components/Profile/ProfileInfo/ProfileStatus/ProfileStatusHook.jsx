import React, {useEffect, useState} from 'react'
import style from '../ProfileInfo.module.css'


const ProfileStatusHook = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const openEditMode = () => {
        setEditMode(true);
    }
    const closeEditMode = () =>  {
        setEditMode(false);
        props.updateUserStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div className={style.profileInfo}>
            {!editMode &&
            <div>
                <span onDoubleClick={openEditMode}> {props.status || 'Изменить статус'} </span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true}
                       onChange={onStatusChange}
                       onBlur={closeEditMode}
                       value={status} />
            </div>
            }
        </div>
    )
}

export default ProfileStatusHook;
