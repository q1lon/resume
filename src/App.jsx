/*
 * @Author: q1lon<q1lon.zhang@gmail.com>
 * @Date: 2020-06-04 09:18:22
 * @LastEditTime: 2021-03-12 14:05:29
 * @FilePath: /zql-resume/src/App.jsx
 */
import { createLogger } from "redux-logger";
import { message } from "antd";
import { useHistory, createBrowserHistory } from "dva";
import dva from "dva";

export const onRouteChange = ({ location, matchedRoutes, routes, action }) => {
  console.log(location.pathname);
  // todo 配置通知
  if (matchedRoutes.length) {
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title || "";
  }
};

const app = dva({
  config: {
    onAction: createLogger(),
    onError(e) {
      message.error(e.message, 3);
    },
  },
  history: createBrowserHistory,
});

// app.router(routes)

// app.router(() => {})
// app.start("#root");
