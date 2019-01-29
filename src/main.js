import Vue from "vue";
import App from "./App";
import "../static/css/weui.css";
import "../static/css/iconfont.css";


Vue.config.productionTip = false;
App.mpType = "app";

const app = new Vue(App);
app.$mount();
