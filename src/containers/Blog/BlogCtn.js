import Blog from "../../views/Blog/Blog";
import {connect} from 'react-redux'
const mapStateToProps = state => {
    console.log('blogCtn', state);
    return {
        username: state.username,
        password: state.password,
        verificationCodeSvg: state.verificationCodeSvg
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch
    }
};

const BlogCtn = connect(mapStateToProps, mapDispatchToProps)(Blog);

export default BlogCtn