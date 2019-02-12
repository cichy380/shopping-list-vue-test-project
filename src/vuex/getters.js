export default {
  getLists: state => state.shoppinglists,
  getListsById: state => id => state.shoppinglists.find(list => id === list.id),
  activeItemsByListId: (state, getters) => id => getters.getListsById(id).items.filter(item => !item.checked),
  activeItemsByListIdCount: (state, getters) => id => getters.activeItemsByListId(id).length
}
