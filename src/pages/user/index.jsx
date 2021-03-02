/*
 * @Author: q1lon<keyron.zhang@gmail.com>
 * @Date: 2021-03-01 16:48:09
 * @LastEditTime: 2021-03-02 13:20:34
 * @FilePath: /zql-resume/src/pages/user/index.jsx
 */
import React, { Component } from "react";
import { IndexModelState, ConnectRC, Loading, connect } from "umi";
import "./index.less";
class Index extends Component {
  render() {
    console.log(this);
    const { user } = this.props;

    return <div className="App">user:{user.name}</div>;
  }
}

export default connect(({ user, loading }) => ({
  user,
  loading: loading.models.user,
}))(Index);
