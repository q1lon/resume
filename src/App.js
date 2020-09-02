import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import { Layout } from "antd";
import { Map } from 'react-amap';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="sider">Sider</div>
          <div className="content"><Map amapkey="a04e4904244e1ccb614d350ca68d312c" /></div>
      </div>
    );
  }
}

export default App;
