import React from 'react';
import s from './Message.module.css'
import cn from 'classnames'
const Message = (props) => {


    return (

        <span className={ cn(s['message'], { [s['owner']]: props.agentId === props.userId} ) }>
            {props.message}
        </span>
    )

}

export default Message;