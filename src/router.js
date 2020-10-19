import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio');
const NotFound = () => import('./components/NotFound.vue');

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/busqueda',
            name: 'busqueda',
            component: () => import(/* webpackChunkName: "busqueda" */ "./components/Busqueda.vue"),
        },
        {
            path: '/ventas',
            name: 'ventas',
            component:() => import(/* webpackChunkName: "ventas" */ "./components/Ventas.vue"),
        }, 
        {
            path: '/total',
            name: 'total',
            component:() => import(/* webpackChunkName: "total" */ "./components/Total.vue"),
        }, 
        {
            path: '*',
            name: 'notfound',
            component: NotFound,
        }, 
    ]
})