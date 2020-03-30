import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueGtag from 'vue-gtag';
import './registerServiceWorker'

Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: { id: 'UA-162128906-1' }
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
