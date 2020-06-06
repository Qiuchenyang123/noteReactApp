import {
    ACTION_SET_USER_INFO,
} from '../actions/userActions'
export default {
    userInfo(state = {}, action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_USER_INFO:
                return payload;
            default:
                return state
        }
    },
}