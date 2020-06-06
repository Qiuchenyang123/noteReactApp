import Article from "../../views/Blog/Article";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch
    }
};

const ArticleCtn = connect(mapStateToProps, mapDispatchToProps)(Article);

export default ArticleCtn