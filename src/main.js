// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);
MuseUI.theme.add('myTheme', {
  primary: MuseUI.Colors.blue,
  secondary: MuseUI.Colors.pinkA200,
  success: MuseUI.Colors.green,
  warning: MuseUI.Colors.yellow600,
  info: MuseUI.Colors.blue,
  error: MuseUI.Colors.red,
}).use('myTheme');


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
