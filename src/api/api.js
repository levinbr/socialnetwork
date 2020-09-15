import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6956d242-cdbb-4297-88a6-01654f489cf3"
    }
});

export const usersAPI = {
    getUsers(usersCount = 1, currentPage= 10) {
        return instance.get(`users?count=${usersCount}&page=${currentPage}`).then(res => {
            return res.data;
        });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`,{}).then(res => {
            return res.data;
        });
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`).then(res => {
            return res.data;
        });
    },
    getProfile(userId) {
        console.warn('Obsolete method')
        return profileAPI.getProfile(userId)
    }
};
export const profileAPI = {
    getUserStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateUserStatus(status) {
        return instance.put(`/profile/status`,{status: status})
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`,{email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};