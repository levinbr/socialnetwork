import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_AVATAR_PHOTO_SUCCESS = 'SAVE_AVATAR_PHOTO_SUCCESS';

let initialState = {
    myPosts:[
        {id: 5, message:'вынести контакты в отдельную компоненту. Сделать их в виде иконок соцсетей', likes:'5'},
        {id: 4, message:'Переписать на formic', likes:'11'},
        {id: 3, message:'Привет! я выучил React!', likes:'23'},
        {id: 2, message:'Я люблю javascript', likes:'56'},
        {id: 1, message:'УРААААА !!!!!!!!!!!!!!!!!', likes:'21'}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: Math.floor(Math.random() * Math.floor(10000)),
                message: action.text,
                likes:'0'
            };
            return {
                ...state,
                newPostText:'',
                myPosts: [ ...state.myPosts.reverse(), newPost].reverse()
            };
        case DELETE_POST:
            return {
                ...state,
                myPosts: [...state.myPosts.filter(p => p !== action.postId)]
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SAVE_AVATAR_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos }
            };
        default:
            return state;
    }
};

export const addPost = (text) => ({type: ADD_POST, text});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const saveAvatarPhotoSuccess = (photos) => ({type: SAVE_AVATAR_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    const res = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(res.data));
}
export const getUserStatus = (userId) => async (dispatch) => {
    const res = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(res.data));
}
export const updateUserStatus = (status) => async (dispatch) => {
    try {
        const res = await profileAPI.updateUserStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    } catch (e) {
        //toDo: должна быть нормальная всплывашка
        alert('error', e.message)
    }

}
export const saveAvatarPhoto = (file) => async (dispatch) => {
    const res = await profileAPI.saveAvatarPhoto(file)
    if (res.data.resultCode === 0) {
        dispatch(saveAvatarPhotoSuccess(res.data.data.photos));
    }
}
export const saveProfileDescription = (profileDescription) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const res = await profileAPI.saveProfileDescription(profileDescription)
    if (res.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        let key = res.data.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase();
        dispatch(stopSubmit('edit-profile', {
            contacts: {[key]: res.data.messages[0]},
        }));
    }
}

export default profileReducer;
