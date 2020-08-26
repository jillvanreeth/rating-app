import Vue from 'vue'
import App from '@/00_global/App.vue'

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
