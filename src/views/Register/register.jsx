import React, {Component} from 'react';
import {
    Form,
    Input,
    Tooltip,
    Select,
    Checkbox,
    Button,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
const { Option } = Select;
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            nickname: '',
            phone: ''
        }
    }

    formRef = React.createRef();

    onFinish = values => {
        console.log(values);
    };
    emailChange = e => {
        const value = e.target.value;
        this.setState({
            email: value
        })
    };
    passwordChange = e => {
        const value = e.target.value;
        this.setState({
            password: value
        })
    };
    nicknameChange = e => {
        const value = e.target.value;
        this.setState({
            nickname: value
        })
    };
    phoneChange = e => {
        const value = e.target.value;
        this.setState({
            phone: value
        })
    };
    onRegister = () => {
        console.log(53, this.state);
        console.log(54, this.axios)
    };
    onBackToLogin = () => {
        this.props.history.push({ pathname: '/login' })
    };
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 1, offset: 9 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 3,
                    offset: 12,
                },
            },
        };

        const prefixSelector = (
            <Form.Item name="prefix" noStyle>
                <Select style={{ width: 70 }}>
                    <Option value="86">+86</Option>
                    <Option value="87">+87</Option>
                </Select>
            </Form.Item>
        );

        return (
            <div className={`registerCtn`}>
                <p className="registerTitle">用户注册</p>
                <Form
                    {...formItemLayout}
                    ref={this.formRef}
                    name="registerForm"
                    onFinish={this.onFinish}
                    initialValues={{
                        prefix: '86'
                    }}
                    scrollToFirstError
                >
                     <Form.Item
                    name="email"
                    label="邮箱"
                    rules={[
                        {
                            type: 'email',
                            message: '请输入正确的邮箱地址',
                        },
                        {
                            required: true,
                            message: '请输入邮箱',
                        },
                    ]}
                >
                     <Input onChange={this.emailChange}/>
                </Form.Item>

                <Form.Item
                name="password"
                label="密码"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password onChange={this.passwordChange} />
            </Form.Item>

                <Form.Item
                    name="confirm"
                    label="确认密码"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="nickname"
                    label={
                        <span>
            昵称&nbsp;
                            <Tooltip title="What do you want others to call you?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
                    }
                    rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                >
                    <Input onChange={this.nicknameChange}/>
                </Form.Item>

                    <Form.Item
                    name="phone"
                    label="手机号码"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} onChange={this.phoneChange} />
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
                    ]}
                    {...tailFormItemLayout}
                    style={{'textAlign': 'right'}}
                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>
                 <Form.Item {...tailFormItemLayout} style={{'textAlign': 'right'}}>
                    <Button type="primary" htmlType="button" onClick={this.onRegister}>注册</Button>
                    <Button className={`grayBtn`} type="primary" htmlType="button" onClick={this.onBackToLogin}>返回</Button>
                </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Register;