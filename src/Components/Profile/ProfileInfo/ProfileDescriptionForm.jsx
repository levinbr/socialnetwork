import React from "react";
import {Field, reduxForm} from "redux-form";
import {Elem} from "../../common/FormControls/FormControls";
import styles from "../../common/FormControls/FormConstrols.module.css";

const input = Elem("input")
const textarea = Elem("textarea")

const ProfileDescriptionForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <button onClick={props.goToEditMode}> Save </button>
            {console.log(props)}
            {props.error && <div className={ styles.formSummaryError }>
                {props.error}
            </div> }

            <div>
                <b> Full name: </b>
                <Field placeholder={'Full name'} component={input} name={'fullName'} validate={[]}/>
            </div>
            <div>
                <label>
                    <b> Looking for a job: </b>
                    <Field component={input} type={"checkbox"} name={'lookingForAJob'} validate={[]}/>
                </label>
            </div>
            <div>
                <b> My skills: </b>
                <Field placeholder={'My skills'} component={textarea} name={'lookingForAJobDescription'} validate={[]}/>
            </div>
            }
            <div>
                <b> About me: </b>
                <Field placeholder={'About me'} component={textarea} name={'aboutMe'} validate={[]}/>
            </div>
            <div>
                <b> Contacts: </b> {Object.keys(props.profile.contacts).map((key) => {
                return <div>
                    <b> {key}: <Field placeholder={key} component={input}
                                      name={'contacts.' + key}  validate={[]}/>  </b>
                </div>
            }) }
            </div>
        </form>
    )
}

const ProfileDescriptionFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDescriptionForm);

export default ProfileDescriptionFormReduxForm;