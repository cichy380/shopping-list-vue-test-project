import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  shoppinglists: [
    {
      id: 'food',
      title: 'Food list',
      items: [
        {id: 'sl-01', text: 'Bananas', checked: false},
        {id: 'sl-02', text: 'Apples', checked: true},
        {id: 'sl-03', text: 'Orange', checked: false}
      ],
      active: true
    },
    {
      id: 'clothes',
      title: 'Clothes list',
      items: [
        {id: 'sl-04', text: 'Shoes', checked: false},
        {id: 'sl-05', text: 'T-shirt', checked: false},
        {id: 'sl-06', text: 'Hat', checked: true},
        {id: 'sl-07', text: 'Jacket', checked: false}
      ],
      active: false
    }
  ]
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
