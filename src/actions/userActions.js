import axios from '../api/index'
export const ACTION_SET_USERNAME = 'SET_USERNAME';
export const ACTION_SET_PASSWORD = 'SET_PASSWORD';
export const ACTION_USER_LOGIN = 'USER_LOGIN';
export const ACTION_ = 'USER_LOGIN';

export function setUserName(username) {
    return {
        type: ACTION_SET_USERNAME,
        payload: username
    }
}

export function setUserPassword(password) {
    return {
        type: ACTION_SET_PASSWORD,
        payload: password
    }
}

export function userLogin() {
    axios.get()
}

export function fetchVerificationSvg() {
    return axios.get('/user/verificationCode')
}

export function userRegister(params) {
    console.log(30, params);
    return axios.post('/user/register', params)
}