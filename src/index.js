import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import appReducer from "./reducers";
import 'antd/dist/antd.css'
import './index.scss';
import axios from 'axios';
import thunk from 'redux-thunk'

// 将 axios 挂载在 React 原型上
React.Component.prototype.axios = axios;

let store = createStore(appReducer, {
    username: '',
    password: '',
    verificationCodeSvg: ''
}, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
