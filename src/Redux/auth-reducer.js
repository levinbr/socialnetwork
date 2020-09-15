import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
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

export const getAuthUserData  = () => async (dispatch) => {
    const res = await authAPI.me()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(res.data.data, true))
    }
}
export const login  = (email, password, rememberMe) => async (dispatch) => {
    const res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        dispatch(stopSubmit("login", {_error: res.data.messages}));
    }
}
export const logout  = () => async (dispatch) => {
   const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData({id: null, login: null, email: null}, false))
    }
}
export default authReducer;
