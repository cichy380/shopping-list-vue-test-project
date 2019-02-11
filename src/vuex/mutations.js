import { generateId } from './../common/utils'
import * as types from './mutation_types'

export default {
  [types.CHANGE_TITLE] (state, data) {
    state.shoppinglists.find(list => list.id === data.id).title = data.title
  },
  [types.POPULATE_SHOPPING_LISTS] (state, lists) {
    state.shoppinglists = lists
  },
  [types.ADD_ITEM] (state, data) {
    state.shoppinglists.find(list => list.id === data.id).items.push({
      id: generateId(),
      text: data.item,
      checked: false
    })
  }
}
