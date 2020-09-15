import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
    myPosts:[
        {message:'Привет! я выучил React!',likes:'28'},
        {message:'Я люблю javascript',likes:'561'},
        {message:'Хочу в отпуск!!!!',likes:'56'},
        {message:'УРААААА Я ЭТО СДЕЛАЛЬ',likes:'21'}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: action.text,
                likes:'0'
            };
            return {
                ...state,
                newPostText:'',
                myPosts: [...state.myPosts, newPost]
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
        default:
            return state;
    }
};

export const addPost = (text) => ({type: ADD_POST, text});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getUserProfile = (userId) => async (dispatch) => {
    const res = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(res.data));
}
export const getUserStatus= (userId) => async (dispatch) => {
    const res = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(res.data));
}
export const updateUserStatus= (status) => async (dispatch) => {
    const res = await profileAPI.updateUserStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}
export default profileReducer;
