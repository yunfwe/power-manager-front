import Vue from 'vue'
import Router from 'vue-router'
import IDRAC from '../components/IDRAC.vue'
import IdracAdmin from '../components/IdracAdmin.vue'
Vue.use(Router);

export default new Router({
  routes: [
    { path: '/admin', component: IdracAdmin},
    {path:'/',component: IDRAC}
]
})
