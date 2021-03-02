/*
 * @Author: q1lon<keyron.zhang@gmail.com>
 * @Date: 2021-03-01 16:48:09
 * @LastEditTime: 2021-03-02 14:35:49
 * @FilePath: /zql-resume/src/pages/user/index.jsx
 */
import React, { Component } from "react";
import { IndexModelState, ConnectRC, Loading, connect } from "umi";
import { Button } from "antd";
import "./index.less";
class Index extends Component {
  componentWillMount() {
    console.log(111);
  }

  handleBtn = (id) => {
    console.log("handleBtn");
    const { dispatch ,user} = this.props;
    dispatch({
      type:'user/query',
      payload: id,
    });
  };

  render() {
    console.log(this);
    const { user } = this.props;

    return (
      <div className="App">
        user:{user.name}
        <Button onClick={()=>this.handleBtn(1)}>点击</Button>
      </div>
    );
  }
}

export default connect(({ user, loading }) => ({
  user,
  loading: loading.models.user,
}))(Index);
