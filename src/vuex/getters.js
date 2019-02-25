import _ from 'underscore'

export default {
  getLists: state => state.shoppinglists,
  getListsById: state => id => _.findWhere(state.shoppinglists, {id: id}),
  activeItemsByListId: (state, getters) => id => getters.getListsById(id).items.filter(item => !item.checked),
  activeItemsByListIdCount: (state, getters) => id => getters.activeItemsByListId(id).length
}
