import React from 'react';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    const adr = '/dialogs/' + props.agentId
    return (
        <div>
           <NavLink to={adr}> {props.name} </NavLink>
        </div>
    )
}

export default Dialog;