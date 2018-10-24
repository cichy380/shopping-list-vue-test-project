import Vue from 'vue'
import Router from 'vue-router'
import Plain from '../components/ShoppingListPlain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/plain',
      name: 'ShoppingListPlain',
      component: Plain
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: Plain
    }
  ]
})
