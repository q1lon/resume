/*
 * @Author: q1lon<q1lon.zhang@gmail.com>
 * @Date: 2020-06-04 09:18:22
 * @LastEditTime: 2020-09-16 09:49:56
 * @FilePath: /zql-resume/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();