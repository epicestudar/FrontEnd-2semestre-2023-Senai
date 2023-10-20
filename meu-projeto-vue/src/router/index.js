import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Filmes from '../components/CatalogoDeFilmes'
import Livros from '../components/CatalogoDeLivros'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, 
  {
    path: '/filmes',
    name: 'filmes',
    component: Filmes
  },
  {
    path: '/livros',
    name: 'livros',
    component: Livros
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
