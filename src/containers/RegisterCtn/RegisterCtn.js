import Register from "../../views/Register/Register";
import {connect} from "react-redux";
import '../../assert/css/views/Register/register.scss'

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch
    }
};

const RegisterCtn = connect(mapStateToProps, mapDispatchToProps)(Register);

export default RegisterCtn