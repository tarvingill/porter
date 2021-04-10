import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Concierge from '@/views/Concierge'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/concierge',
        name: "Concierge",
        component: Concierge
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router