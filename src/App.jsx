/*
 * @Author: q1lon<q1lon.zhang@gmail.com>
 * @Date: 2020-06-04 09:18:22
 * @LastEditTime: 2021-03-01 17:14:38
 * @FilePath: /zql-resume/src/App.js
 */
export const onRouteChange = ({ location,matchedRoutes, routes, action })=> {
  console.log(location.pathname);
  // todo 配置通知
  if (matchedRoutes.length) {
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
  }
}