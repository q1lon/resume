/*
 * @Author: q1lon<keyron.zhang@gmail.com>
 * @Date: 2021-03-01 16:45:55
 * @LastEditTime: 2021-03-12 10:16:28
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
  dva: {
    immer: true,
    hmr: false,
    skipModelValidate: true
  },
  devtool: false,// SourceMap
  base: "/",
  publicPath: "./",
  outputPath: './dist',
  hash: true,
  history: {
    type: "hash",
  },
  routes: routes,
  dynamicImport: {
    loading: '@/Loading',
  },
});
