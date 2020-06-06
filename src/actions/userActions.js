import axios from '../api/index'
export const ACTION_SET_USER_INFO = 'SET_USER_INFO';
export const ACTION_USER_LOGIN = 'USER_LOGIN';
export const ACTION_ = 'USER_LOGIN';

export function setUserInfo(userInfo) {
    return {
        type: ACTION_SET_USER_INFO,
        payload: userInfo
    }
}

export function fetchVerificationSvg() {
    return axios.get('/user/verificationCode')
}

export function userRegister(params) {
    return axios.post('/user/register', params)
}

export function userLogin(params) {
    return axios.post('/user/login', params)
}