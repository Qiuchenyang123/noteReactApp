import Blog from "../../views/Blog/Blog";
import {connect} from 'react-redux'
const mapStateToProps = state => {
    return state
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch
    }
};

const BlogCtn = connect(mapStateToProps, mapDispatchToProps)(Blog);

export default BlogCtn