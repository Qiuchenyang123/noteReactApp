import Home from '../views/Home/Home.jsx';
import Login from '../views/Login/Login.jsx';
import Register from '../views/Register/Register.jsx';
import Blog from "../views/Blog/Blog";
import Diary from "../views/Diary/Diary";
import Message from "../views/Message/Message";
import About from "../views/About/About";
import homeChildrenRouter from "./homeChildrenRouter";
const router = [
    {
        path: '/home',
        meta: {
            title: '主页',
            key: 'home'
        },
        component: Home,
        exact: true,
        children: homeChildrenRouter
    },
    {
        path: '/login',
        meta: {
            title: '登录页',
            key: 'login'
        },
        component: Login,
        exact: false
    },
    {
        path: '/register',
        meta: {
            title: '注册页',
            key: 'register'
        },
        component: Register,
        exact: false
    },

];
export default router