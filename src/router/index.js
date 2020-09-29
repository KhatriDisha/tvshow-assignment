import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import ShowDetails from '@/components/showDetails'
Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/showdetails/:showId', 
            name: 'ShowDetails',
            component: ShowDetails,
        },
        {
            path: '*', 
            name: 'Home',
            component: Home,
        }
     
    ]

})

export default router