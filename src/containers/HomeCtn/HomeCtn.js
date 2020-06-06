import Home from "../../views/Home/Home";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        username: state.username,
        verificationCodeSvg: state.verificationCodeSvg,
        articleList: state.articleList
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch
    }
};

const HomeCtn = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeCtn