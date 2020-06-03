import React, {Component} from 'react';
// import '../../assert/css/font-awesomw.css'
import '../../assert/css/util.css'
import '../../assert/css/main.css'
import { message } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onUsernameChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    onLogin = () => {
        const self = this;
        const params = {
            email: self.state.email,
            password: self.state.password
        };
        this.axios.post(this.baseUrl + '/user/login', params)
            .then(res => {
                console.log(res);
                res = res.data;
                if (res.code === 1) {
                    message.success({
                        content: '登录成功',
                        duration: 1,
                        onClose() {

                        }
                    })
                } else {
                    message.error({
                        content: res.errMsg,
                        duration: 5,
                    })
                }
            })
            .catch(err => {
                message.error({
                    content: err.errMsg || err,
                    duration: 5,
                })
            })
    }

    turnToRegister = () => {
        this.props.history.push({ pathname: '/register' })
    }

    render() {
        return (
            <div className="login">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src={require('../../assert/img/img-01.png')} alt="IMG" />
                        </div>

                        <form className="login100-form validate-form">
				<span className="login100-form-title">
					会员登陆
				</span>

                            <div className="wrap-input100 validate-input">
                                {/*<Input className={`input100`} placeholder={`账号`} prefix={<UserOutlined />}/>*/}
                                <input className="input100" type="text" onChange={this.onUsernameChange} name="email" placeholder="邮箱" />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <UserOutlined className="fa fa-envelope"  aria-hidden="true"/>
						{/*<i className="fa fa-envelope"></i>*/}
					</span>
                            </div>

                            <div className="wrap-input100 validate-input">
                                <input className="input100" type="password" onChange={this.onPasswordChange} name="pass" placeholder="密码" />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <UnlockOutlined className="fa fa-lock" aria-hidden="true" />
						{/*<i className="fa fa-lock" aria-hidden="true"></i>*/}
					</span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button type={`button`} className="login100-form-btn" onClick={this.onLogin}>
                                    登陆
                                </button>
                            </div>

                            <div className="text-center p-t-12">
                                <a className="txt2" href="#">
                                    忘记密码？
                                </a>
                            </div>

                            <div className="text-center p-t-136">
                                <a className="txt2" href="javascript: void(0)" onClick={this.turnToRegister}>
                                    还没有账号？立即注册
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;