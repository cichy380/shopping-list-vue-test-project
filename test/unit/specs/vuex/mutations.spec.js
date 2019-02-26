import _ from 'underscore'
import mutations from '../../../../src/vuex/mutations'
import { POPULATE_SHOPPING_LISTS, CHANGE_TITLE, ADD_ITEM } from '../../../../src/vuex/mutation_types'

describe('mutations.js', () => {
  let state

  beforeEach(() => {
    state = {
      shoppinglists: []
    }
  })

  describe('POPULATE_SHOPPING_LISTS', () => {
    it('should assign to the value of shopping lists the given property', () => {
      mutations[POPULATE_SHOPPING_LISTS](state, [{id: '1'}])
      expect(state.shoppinglists).to.have.length(1)
      expect(state.shoppinglists).to.eql([{id: '1'}])

      mutations[POPULATE_SHOPPING_LISTS](state, [{id: '2'}]) // overwrite the existing array
      expect(state.shoppinglists).to.have.length(1)
      expect(state.shoppinglists).to.eql([{id: '2'}])
    })
  })

  describe('CHANGE_TITLE', () => {
    it('should change the title of the given list', () => {
      state.shoppinglists = [{id: '1', title: 'title #1'}, {id: '2', title: 'title #2'}]
      mutations[CHANGE_TITLE](state, {id: '2', title: 'changed title'})
      expect(state.shoppinglists).to.eql([{id: '1', title: 'title #1'}, {id: '2', title: 'changed title'}])
    })
  })

  describe('ADD_ITEM', () => {
    it('should add item to the items of the selected shopping list', () => {
      state.shoppinglists = [{id: '1', items: [{id: '11', text: 'item name #11', checked: false}]}, {id: '2', items: [{id: '21', text: 'item name #21', checked: true}]}]
      mutations[ADD_ITEM](state, {id: '2', item: 'new item name'})
      let selectedShoppinglistsItems = _.findWhere(state.shoppinglists, {id: '2'}).items
      expect(selectedShoppinglistsItems).to.have.length(2)
      expect(selectedShoppinglistsItems[1]).to.include({text: 'new item name', checked: false})
    })
  })
})
