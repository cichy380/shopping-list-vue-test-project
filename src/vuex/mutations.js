import _ from 'underscore'
import { generateId } from './../common/utils'
import * as types from './mutation_types'
import getters from './getters'

export default {
  [types.CHANGE_TITLE] (state, data) {
    getters.getListsById(state)(data.id).title = data.title
  },
  [types.POPULATE_SHOPPING_LISTS] (state, lists) {
    state.shoppinglists = lists
  },
  [types.ADD_ITEM] (state, data) {
    _.findWhere(state.shoppinglists, {id: data.id}).items.push({
      id: generateId(),
      text: data.item,
      checked: false
    })
  }
}
