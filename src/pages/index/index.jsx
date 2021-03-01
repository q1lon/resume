/*
 * @Author: q1lon<keyron.zhang@gmail.com>
 * @Date: 2021-03-01 16:48:09
 * @LastEditTime: 2021-03-01 19:46:09
 * @FilePath: /zql-resume/src/pages/index/index.jsx
 */
import React, { Component } from "react";
// import logo from './logo.svg';
import "./index.less";
// import { Layout } from "antd";
import { Map } from "react-amap";

class Index extends Component {
  render() {
    return (
      <div className="App">
        <div className="sider">Sider</div>
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
