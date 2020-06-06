import axios from '../api/index'
export const ACTION_SET_ARTICLE_LIST = 'SET_ARTICLE_LIST';
export const ACTION_SET_ARTICLE_INFO = 'SET_ARTICLE_INFO';

export function setArticleList(articleList) {
    return {
        type: ACTION_SET_ARTICLE_LIST,
        payload: articleList
    }
}

export function setArticleInfo(articleInfo) {
    return {
        type: ACTION_SET_ARTICLE_INFO,
        payload: articleInfo
    }
}

export function fetchArticleList(params) {
    return dispatch => {
        axios.get('/article/articleList', {params})
            .then(res => {
                dispatch(setArticleList(res.data.data))
            })
            .catch(err => {
                console.log('article list获取失败，错误：' + err)
            })
    }
}

export function fetchArticleInfo(id) {
    return (dispatch, getState) => {
        const {articleList} = getState();
        const articleInfo = articleList.filter(item => item._id === id)[0];
        console.log(articleList, articleInfo);
        dispatch(setArticleInfo(articleInfo))
    }
}

export function addArticleInfo(params) {
    return axios.post('/article/addArticle', params)
}