import { CHANGE_TITLE, ADD_ITEM } from './mutation_types'

export default {
  changeTitle: ({ commit }, data) => {
    commit(CHANGE_TITLE, data)
  },
  addItem: ({ commit }, data) => {
    commit(ADD_ITEM, data)
  }
}
