import { createSelector } from 'reselect'

const getUsers = (state) => {
    return state.usersPage.users;
};

//простой пример селектора, без особого смысла
export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(()=>{return true})
})

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};
export const getTotalUsers = (state) => {
    return state.usersPage.totalUsers;
};
export const getUsersCount = (state) => {
    return state.usersPage.usersCount;
};
export const getIsProgress = (state) => {
    return state.usersPage.isProgress;
};
export const getFollowingProgress = (state) => {
    return state.usersPage.followingProgress;
};

