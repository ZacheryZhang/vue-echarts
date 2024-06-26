import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import { Dialog,Message,Loading } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less';
import * as echarts from 'echarts';
import img from './lib/img'
import utils from "./lib/utils";

Vue.prototype.$echarts = function (el) {
    return echarts.init(el, null, {renderer: 'svg'})
}
Vue.prototype.$images = img
Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(utils)
Vue.use(Dialog);
Vue.use(Message);
Vue.use(Loading);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
