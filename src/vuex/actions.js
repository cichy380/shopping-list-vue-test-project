import { CHANGE_TITLE, ADD_ITEM, POPULATE_SHOPPING_LISTS } from './mutation_types'
import api from '../api'
import getters from './getters'

export default {
  changeTitle: (store, {id, title}) => {
    store.commit(CHANGE_TITLE, {id, title})
    store.dispatch('updateShoppingList', id)
  },
  populateShoppingLists: ({ commit }) => {
    api.fetchShoppingLists().then(response => commit(POPULATE_SHOPPING_LISTS, response.data))
  },
  updateShoppingList: (store, id) => {
    let shoppingList = getters.getListsById(store.state)(id)
    api.updateShoppingList(shoppingList)
  },
  addItem: (store, {id, item}) => {
    store.commit(ADD_ITEM, {id, item})
    store.dispatch('updateShoppingList', id)
  }
}
