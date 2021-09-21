import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  /*** cambie la ruta raiz de home por Login - joel****/
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  /*** elimine la ruta home y cree la ruta InsMascota (inscripción mascota- joel****/
  {
    path: '/insmascota',
    name: 'InsMascota',
    component: () => import(/* webpackChunkName: "about" */ '../views/InsMascota.vue')
  },
  {
    path: '/inscripcion',
    name: 'Inscripcion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inscripcion.vue')
  },
  {
    path: '/consulta',
    name: 'Consulta',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Consulta.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
