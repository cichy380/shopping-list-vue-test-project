import Vue from 'vue'
import Router from 'vue-router'
import Plain from '../components/ShoppingListPlain'
import Components from '../components/ShoppingListComponents'
import Templates from '../components/ShoppingListTemplates'
import SingleFileComponents from '../components/ShoppingListSingleFileComponents'

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
      path: '/templates',
      name: 'ShoppingListTemplates',
      component: Templates
    },
    {
      path: '/singlefile',
      name: 'ShoppingListSingleFileComponents',
      component: SingleFileComponents
    },
    {
      path: '/',
      name: 'Homepage',
      component: Plain
    }
  ]
})
