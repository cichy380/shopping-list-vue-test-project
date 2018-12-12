import { generateId, findWhere } from './../common/utils'
import * as types from './mutation_types'

export default {
  [types.CHANGE_TITLE] (state, data) {
    findWhere(state.shoppinglists, {id: data.id}).title = data.title
  },
  [types.ADD_ITEM] (state, data) {
    findWhere(state.shoppinglists, {id: data.id}).items.push({
      id: generateId(),
      text: data.item,
      checked: false
    })
  }
}
