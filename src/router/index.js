import Vue from 'vue'
import VueRouter from 'vue-router'
import RoomRates from '@/views/RoomRates'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: "RoomRates",
        component: RoomRates
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router