/*
 * @Author: q1lon<keyron.zhang@gmail.com>
 * @Date: 2021-03-01 16:45:55
 * @LastEditTime: 2021-03-01 17:59:07
 * @FilePath: /zql-resume/config/config.js
 */
import { defineConfig } from "umi";
import routes from "./routes";

export default defineConfig({
  fastRefresh: {},
  nodeModulesTransform: {
    type: "none",
    exclude: [],
  },
  devtool: false,// SourceMap
  base: "/",
  publicPath: "/pubilc/",
  hash: true,
  history: {
    type: "hash",
  },
  routes: routes,
});