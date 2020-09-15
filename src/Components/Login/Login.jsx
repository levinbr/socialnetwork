import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Elem} from "../common/FormControls/FormControls";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from '../common/FormControls/FormConstrols.module.css';

const input = Elem("input")

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"}
                       component={input}
                       name={"email"}
                       validate={[required]}/>
            </div>
            <div>
                <Field type="password"
                       placeholder={"Password"}
                       component={input}
                       name={"password"}
                       validate={[required]}/>
            </div>
            <div>
                <label>
                    <Field type={"checkbox"}
                           component={input}
                           name={"rememberMe"}
                    /> remember me
                </label>
            </div>
            {props.error && <div className={ styles.formSummaryError }>
                {props.error}
            </div>
            }

            <div>
                <button> SignIn </button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/Profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);