/*
 * @Author: q1lon<keyron.zhang@gmail.com>
 * @Date: 2021-03-01 16:48:09
 * @LastEditTime: 2021-03-26 16:50:08
 * @FilePath: /zql-resume/src/pages/index/index.jsx
 */
import React, { Component } from "react";
// import logo from './logo.svg';
import "./index.less";
// import { Layout } from "antd";
import { Map } from "react-amap";

import { subscribe } from '../../utils/subscribe';
class Index extends Component {


  constructor(props) {
    super(props);
    subscribe((err, count) => {
      console.log(count)
      this.setState({count})
    });
  }
  state = { count: 'no timestamp yet' }
  render() {
    return (
      <div className="App">
        <div className="sider">Sider
        This is the timer value: {this.state.count}
        </div>
        <div className="content">
          <Map amapkey="a04e4904244e1ccb614d350ca68d312c" />
        </div>
        <div>
          <a href="https://github.com/q1lon">
            <img
              style={{ position:"absolute", top: 0, right: 0, border: 0 }}
              src={require("../../../public/fork_me.png")}
              alt="Fork me on GitHub"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Index;
