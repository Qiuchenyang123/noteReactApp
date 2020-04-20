import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from "redux";
import appReducer from "./reducers";
import 'antd/dist/antd.css'
import './index.scss';
import axios from 'axios';

// 将 axios 挂载在 React 原型上
React.Component.prototype.axios = axios;
React.Component.prototype.baseUrl = 'http://47.98.234.0:23333';

let store = createStore(appReducer);

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
