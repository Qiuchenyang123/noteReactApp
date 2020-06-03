import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../assert/css/component/Nav.scss'

class NavItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            pathname: window.location.pathname
        };
    }

    render() {
        const {path, text} = this.props;
        return (
            <li className={`nav-item${this.state.pathname === path ? ' nav-on' : ''}`}>
                <Link to={path}>{text}</Link>
            </li>
        )
    }
}
class Nav extends Component {
    render() {
        const navList = [
            {
                title: '首页',
                path: '/home/index'
            },
            {
                title: '博客',
                path: '/home/blog'
            },
            {
                title: '日记',
                path: '/home/diary'
            },
            {
                title: '留言',
                path: '/home/message'
            },
            {
                title: '关于',
                path: '/home/about'
            },
        ];
        return (
            <div className="nav-container">
                <ul className="nav-list">
                    <li className="nav-logo">Mr.QCY</li>
                    {navList.map((nav, index) => <NavItem path={nav.path} text={nav.title} key={index}/>)}
                    <li className="nav-logout">
                        <Link to={`/login`} className="btn btn-login">登录</Link>
                        <Link to={`/register`} className="btn btn-register">注册</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Nav;