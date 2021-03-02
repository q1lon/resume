/*
 * @Author: q1lon<q1lon.zhang@gmail.com>
 * @Date: 2020-06-04 09:18:22
 * @LastEditTime: 2021-03-02 13:30:38
 * @FilePath: /zql-resume/src/App.jsx
 */
import { createLogger } from 'redux-logger';
import { message } from 'antd';
import { dva, useHistory} from 'dva';

export const onRouteChange = ({ location,matchedRoutes, routes, action })=> {
  console.log(location.pathname);
  // todo 配置通知
  if (matchedRoutes.length) {
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
  }
}

// const dva = {
//   config: {
//     onAction: createLogger(),
//     onError(e) {
//       message.error(e.message, 3);
//     },
//   },
//   history:useHistory
// };