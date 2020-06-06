import ArticleEditPage from "../../views/Blog/ArticleEditPage";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return state
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch
    }
};

const ArticleEditPageCtn = connect(mapStateToProps, mapDispatchToProps)(ArticleEditPage);

export default ArticleEditPageCtn