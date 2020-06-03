import Blog from "../views/Blog/Blog";
import Diary from "../views/Diary/Diary";
import Message from "../views/Message/Message";
import About from "../views/About/About";

const homeChildrenRouter = [
    {
        path: '/blog',
        meta: {
            title: '博文',
            key: 'blog'
        },
        component:  Blog,
        exact: false
    },
    {
        path: '/diary',
        meta: {
            title: '日记',
            key: 'diary'
        },
        component: Diary,
        exact: false
    },
    {
        path: '/message',
        meta: {
            title: '留言',
            key: 'message'
        },
        component: Message,
        exact: false
    },
    {
        path: '/about',
        meta: {
            title: '留言',
            key: 'about'
        },
        component: About,
        exact: false
    },
];

export default homeChildrenRouter