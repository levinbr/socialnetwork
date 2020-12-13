import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css'
import {reset, Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validators/validators";
import {Elem} from "../common/FormControls/FormControls";

const Dialogs = (props) => {

    let newDialogs = props.state.dialogs.map ( dialog => <Dialog key={dialog.id}
                                                                 name={dialog.name}
                                                                 agentId={dialog.agentId} />);
    let newMessage = props.state.messages.map ( message => <Message key={message.id}
                                                                    agentId={message.agentId}
                                                                    message={message.message}
                                                                    userId ={props.userId} />);

    let onAddMessage = (dataForm) => {
        props.addNewMessage(dataForm.textMessage, props.userId);

    };

    return (
        <div className={s.dialogs}>
            <div>
                { newDialogs }
            </div>
            <div className={s.messages}>
                { newMessage }
            </div>
            <div className={s.answer}>
                <NewMessageReduxForm onSubmit={onAddMessage}/>
            </div>

        </div>
    )
}

const maxLength30 = maxLength(30)
const Textarea2 = Elem("textarea")

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"textMessage"}
                   rows={'3'}
                   placeholder={'Write a message...'}
                   component={Textarea2}
                   validate={[required, maxLength30]}
            />
            <div>
                <button> send </button>
            </div>
        </form>
    )
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('newMessage'));

const NewMessageReduxForm = reduxForm({
    form: 'newMessage',
    onSubmitSuccess: afterSubmit,
})(NewMessageForm);



export default Dialogs;