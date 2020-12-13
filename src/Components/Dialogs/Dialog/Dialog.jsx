import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css'

const Dialog = (props) => {
    const adr = '/dialogs/' + props.agentId
    return (
        <div className={s.dialog}>
           <NavLink to={adr}> {props.name} </NavLink>
        </div>
    )
}

export default Dialog;