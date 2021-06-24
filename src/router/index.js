import Vue from 'vue'
import VueRouter from 'vue-router'
import CalcRoomRates from '@/components/CalcRoomRates'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: "roomRates",
        component: CalcRoomRates
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router