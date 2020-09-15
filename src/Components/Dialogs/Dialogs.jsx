import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import style from './Dialogs.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validators/validators";
import {Elem} from "../common/FormControls/FormControls";


const Dialogs = (props) => {
    let newDialogs = props.state.dialogs.map ( dialog => <Dialog name={dialog.name} agentId={dialog.agentId}/>);
    let newMessage = props.state.messages.map ( message => <Message message={message.message}/>);
    let newMessageText = props.state.newMessageText;

    let onUpdateMessageText = (e) => {
        props.updateNewMessage(e.target.value);
    };
    let onAddMessage = (dataForm) => {
        console.log(dataForm);
        props.addNewMessage(dataForm.textMessage);
    };

    return (
        <div className={style.dialogs}>
            <div>
                {newDialogs}
            </div>
            <div>
                {newMessage}
            </div>
            <div className={style.answer}>
                <NewMessageReduxForm onSubmit={onAddMessage}/>
            </div>


        </div>
    )
}

const maxLength15 = maxLength(15)
const Textarea2 = Elem("textarea")

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"textMessage"}
                   component={Textarea2}
                   validate={[required, maxLength15]}
            />
            <div>
                <button> to answer </button>
            </div>
        </form>
    )
}

const NewMessageReduxForm = reduxForm({form: "newMessage"})(NewMessageForm);


export default Dialogs;