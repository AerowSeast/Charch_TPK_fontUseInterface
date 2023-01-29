import { createApp } from 'vue'
import App from './App.vue'
import "./assets/less/common.less";
import router from "./router";

createApp(App).use(router).mount('#app');