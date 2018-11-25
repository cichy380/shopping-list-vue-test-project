import Vue from 'vue'
import Router from 'vue-router'
import Plain from '../components/views/ShoppingListPlain'
import Components from '../components/views/ShoppingListComponents'
import Templates from '../components/views/ShoppingListTemplates'
import SingleFileComponents from '../components/views/ShoppingListSingleFileComponents'
import MultiShoppingLists from '../components/views/MultiShoppingLists'

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
      path: '/multi',
      name: 'MultiShoppingLists',
      component: MultiShoppingLists
    },
    {
      path: '/',
      name: 'Homepage',
      component: Plain
    }
  ]
})
