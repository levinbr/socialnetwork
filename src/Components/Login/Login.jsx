import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Elem} from "../common/FormControls/FormControls";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from './Login.module.css'

const input = Elem("input")

const LoginForm = (props) => {
    return (

        <div className={s['container']}>
            <div>
                <h2> Login </h2>
                <form onSubmit={props.handleSubmit}>
                    <div className={s['inputBox']}>
                        <Field placeholder={"email"} component={input}
                               name={"email"} validate={[required]} />
                    </div>
                    <div className={s['inputBox']}>
                        <Field type="password" placeholder={"Password"} component={input}
                               name={"password"} validate={[required]} />
                    </div>
                    <div className={s['ch']}>

                        <label>
                            <Field type='checkbox' component={input} name='rememberMe' /> remember me
                        </label>

                    </div>
                    <div>
                        {props.captcha && <img src={props.captcha} />}
                        {props.captcha && <div className={s['inputBox']}>
                            <Field placeholder={"symbols from image"} component={input}
                                   name={"captcha"} validate={[required]}/>
                        </div>
                        }
                    </div>

                    {props.error && <span className={ s['summary-error'] }>
                    {props.error}
                </span>
                    }

                    <div className={s['inputBox']}>
                        <input type={'submit'} value={'SignIn'} />
                    </div>
                </form>
            </div>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/Profile"} />
    }
    return (
        <>
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captchaUrl}/>
        </>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);