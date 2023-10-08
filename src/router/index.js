import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/homePage.vue')
    },
    {
      path:'/info',
      name:'info',
      component: () => import('../views/infoPage.vue')
    }
    ,
    {
      path:'/about',
      name:'about',
      component: () => import('../views/aboutUs.vue')
    }, 
    {
      path:'/level1',
      name:'level1',
      component: () => import('../views/level1.vue')
    },
    {
      path:'/level2',
      name:'level2',
      component: () => import('../views/level2.vue')  
    }
  ]
})

export default router
