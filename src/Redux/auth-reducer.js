import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                userId: action.payload.id,
                login: action.payload.login,
                email: action.payload.email,
                isAuth: action.isAuth
            };
        default:
            return state;
    }
};

export const setAuthUserData = (payload, isAuth) => ({type: SET_AUTH_USER_DATA, payload, isAuth});
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl});
export const getAuthUserData  = () => async (dispatch) => {
    const res = await authAPI.me()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(res.data.data, true))
    }
}
export const login  = (email, password, rememberMe, captcha) => async (dispatch) => {
    const res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (res.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        dispatch(stopSubmit("login", {_error: res.data.messages}));
    }
}
export const logout  = () => async (dispatch) => {
   const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData({id: null, login: null, email: null}, false))
    }
}
export const getCaptchaUrl  = () => async (dispatch) => {
   const res = await securityAPI.getCaptcha()
   const captchaUrl = res.data.url;
   dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;
