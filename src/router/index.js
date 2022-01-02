import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index.vue'
import Result from '../views/Result.vue'
import Album from '../views/Album.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/result/*',
    name: 'Result',
    component: Result
  },
  {
    path: '/album/*',
    name: 'Album',
    component: Album
  },
  {
    path: '*',
    component: Index
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
