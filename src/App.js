import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Layout, Card } from 'antd';
const { Header, Footer, Sider, Content, Menu, Breadcrumb } = Layout;


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>RESUME ©2020 Created by q1lon</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
