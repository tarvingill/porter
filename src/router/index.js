import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'About',
        component: About
    },
    {
        path: '/home',
        name: "Home",
        component: Home
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router