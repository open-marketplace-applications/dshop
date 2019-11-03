import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { store } from './store'
import IotaPayment from 'vue-iota-payment'

Vue.use(IotaPayment, { store, url: 'https://store.einfachiota.de', path: '/api/iota_payments' })

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
