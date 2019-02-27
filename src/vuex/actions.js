import { CHANGE_TITLE, ADD_ITEM, POPULATE_SHOPPING_LISTS } from './mutation_types'
import api from '../api'
import getters from './getters'

export default {
  populateShoppingLists: ({ commit }) => api.fetchShoppingLists().then(response => commit(POPULATE_SHOPPING_LISTS, response.data)),
  changeTitle: (store, {id, title}) => {
    store.commit(CHANGE_TITLE, {id, title})
    return store.dispatch('updateShoppingList', id)
  },
  addItem: (store, {id, item}) => {
    store.commit(ADD_ITEM, {id, item})
    return store.dispatch('updateShoppingList', id)
  },
  updateShoppingList: (store, id) => {
    let shoppingList = getters.getListsById(store.state)(id)
    return api.updateShoppingList(shoppingList)
  }
}
