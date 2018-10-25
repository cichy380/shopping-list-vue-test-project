import Vue from 'vue'
import Router from 'vue-router'
import Plain from '../components/ShoppingListPlain'
import Components from '../components/ShoppingListComponents'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/plain',
      name: 'ShoppingListPlain',
      component: Plain
    },
    {
      path: '/components',
      name: 'ShoppingListComponents',
      component: Components
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: Plain
    }
  ]
})
