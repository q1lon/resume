import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import { Layout } from "antd";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <div style={{ width: "28%", backgroundColor: "#DDDDDD" }}>Sider</div>
          <div style={{ width: "72%", backgroundColor: "#fff" }}>Content</div>
        </div>
      </div>
    );
  }
}

export default App;
