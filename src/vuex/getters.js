export default {
  getLists: state => state.shoppinglists,
  activeItemsByListIdCount: state => id => state.shoppinglists.find(list => id === list.id).items.filter(item => !item.checked).length
}
