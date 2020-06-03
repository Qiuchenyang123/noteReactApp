import Login from "../../views/Login/Login";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch
    }
};

const LoginCtn = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginCtn