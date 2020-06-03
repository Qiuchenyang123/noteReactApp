import {
    ACTION_SET_USERNAME,
    ACTION_SET_PASSWORD
} from '../actions/userActions'
export default {
    username(state = '', action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_USERNAME:
                return payload;
            default:
                return state
        }
    },
    password(state = '', action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_PASSWORD:
                return payload;
            default:
                return state
        }
    },

}