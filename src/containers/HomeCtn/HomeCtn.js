import Home from "../../views/Home/Home";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    console.log('HomeLayoutCtn', state);
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

const HomeCtn = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeCtn