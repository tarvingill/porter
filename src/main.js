import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
//import firestore from '@/firebase/firestore'
import router from '@/router/index'

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    firebase,
    //firestore,
    render: h => h(App),
}).$mount('#app')
