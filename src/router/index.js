import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Concierge from '@/views/Concierge'
import RoomRates from '@/views/RoomRates'

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
    },
    {
        path: '/room-rates',
        name: "RoomRates",
        component: RoomRates
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router