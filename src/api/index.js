import axios from 'axios';

// 设置默认参数
axios.defaults.baseURL = 'http://localhost:23333'; // 设置访问地址
axios.defaults.withCredentials = true; // 设置跨域允许携带 cookie
axios.defaults.headers.post["Content-type"] = "application/x-www-form-urlencoded"; // 设置POST请求格式

export default axios;

