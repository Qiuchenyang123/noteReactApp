import {
    ACTION_SET_ARTICLE_LIST,
    ACTION_SET_ARTICLE_INFO
} from "../actions/articleActions";

export default {
    articleList(state = [], action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_ARTICLE_LIST:
                return payload;
            default:
                return state
        }
    },
    articleInfo(state = {}, action) {
        const {type, payload} = action;
        switch (type) {
            case ACTION_SET_ARTICLE_INFO:
                return payload;
            default:
                return state
        }
    }
}