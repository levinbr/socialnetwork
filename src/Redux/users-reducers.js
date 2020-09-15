import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const SET_PROGRESS = 'SET_PROGRESS';
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    currentPage: 1,
    totalUsers: 0,
    usersCount: 10,
    isProgress: false,
    followingProgress: []
};

const usersReducers = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map( u => {
                if (u.id === action.id) {
                    return {...u, followed:true}
                }
                return u;
                })};
        case UNFOLLOW:
            return {...state, users: state.users.map( u => {
                    if (u.id === action.id) {
                        return {...u, followed:false}
                    }
                    return u;
                })};
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS:
            return {...state, totalUsers: action.totalUsers}
        case SET_PROGRESS:
            return {...state, isProgress: action.isProgress}
        case SET_FOLLOWING_PROGRESS:
            return {...state, followingProgress: action.isFetching
                    ? [...state.followingProgress, action.id]
                    : [...state.followingProgress.filter(id => id !== action.id)]
            }
        default:
            return state;
    }
};

export const followSuccess = (id) => ({type: FOLLOW, id:id});
export const unFollowSuccess = (id) => ({type: UNFOLLOW, id:id});
export const setUsers = (users) => ({type: SET_USERS, users:users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers});
export const setProgress = (isProgress) => ({type: SET_PROGRESS, isProgress});
export const setFollowingProgress = (isFetching, id) => ({type: SET_FOLLOWING_PROGRESS, isFetching, id});


export const requestUsers = (usersCount, currentPage) => {
    return async (dispatch) => {
        dispatch(setProgress(true));

        const res = await usersAPI.getUsers(usersCount, currentPage)
        dispatch(setProgress(false));
        dispatch(setUsers(res.items));
        dispatch(setTotalUsers(res.totalCount));
    }
}
export const unFollow = (id) => {
    return async (dispatch) => {
        dispatch(setFollowingProgress(true, id));

        const res = await usersAPI.unFollow(id)
        if (res.resultCode === 0) {
            dispatch(unFollowSuccess(id));
        }
        dispatch(setFollowingProgress(false, id));
    }
}
export const follow = (id) => {
    return async (dispatch) => {
        dispatch(setFollowingProgress(true, id));
        const res = await usersAPI.follow(id)
        if (res.resultCode === 0) {
            dispatch(followSuccess(id));
        }
        dispatch(setFollowingProgress(false, id));
    }
}

export default usersReducers;