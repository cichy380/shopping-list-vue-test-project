export default {
  getLists: state => state.shoppinglists,
  activeItemsByListId: state => id => state.shoppinglists.find(list => id === list.id).items.filter(item => !item.checked),
  activeItemsByListIdCount: (state, getters) => id => getters.activeItemsByListId(id).length
}
