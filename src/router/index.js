import Vue from 'vue'
import Router from 'vue-router'
import home from '@/router/home.vue'
import eggFrenzy from '@/router/eggFrenzy.vue'
import flush from '@/router/flush.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/',
    	component:home
    },
    {
    	path:'/home',
    	component:home
    },
    {
      path: '/eggFrenzy',
      component:eggFrenzy
    },
    {
    	path:'/flush',
    	name:'flush',
    	component:flush
    }
  ]
})
