// import _ from 'underscore'
import getters from '../../../../src/vuex/getters'

describe('getters.js', () => {
  let state, lists

  beforeEach(() => {
    lists = [
      {
        id: '1',
        title: 'title of list #1',
        items: []
      },
      {
        id: '2',
        title: 'title of list #2',
        items: [
          {
            id: '21',
            text: 'item #21',
            checked: false // active #1
          },
          {
            id: '22',
            text: 'item #22',
            checked: true
          },
          {
            id: '23',
            text: 'item #23',
            checked: false // active #2
          }
        ]
      },
      {
        id: '3',
        title: 'title of list #3',
        items: [
          {
            id: '31',
            text: 'item #31',
            checked: true
          }
        ]
      }
    ]

    state = {
      shoppinglists: lists
    }
  })

  describe('getLists', () => {
    it('should return lists', () => {
      expect(getters.getLists(state)).to.eql(lists)
    })
  })

  describe('getListsById', () => {
    it('should return the shopping list object by its id', () => {
      expect(getters.getListsById(state)('2')).to.include({title: 'title of list #2'})
    })

    it('should not return anything if the passed id is not in the list', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(getters.getListsById(state)('notexisting')).to.be.undefined
    })
  })

  describe('activeItemsByListId', () => {
    it('should return the shopping list unchecked items', () => {
      // mock of getters
      const _getters = {
        getListsById: getters.getListsById(state)
      }

      expect(getters.activeItemsByListId(state, _getters)('1')).to.have.length(0)
      expect(getters.activeItemsByListId(state, _getters)('2')).to.have.length(2)
      expect(getters.activeItemsByListId(state, _getters)('2')[0]).to.include({id: '21'})
      expect(getters.activeItemsByListId(state, _getters)('2')[1]).to.include({id: '23'})
      expect(getters.activeItemsByListId(state, _getters)('3')).to.have.length(0)
    })
  })

  describe('activeItemsByListId', () => {
    it('should return the number of shopping list unchecked items', () => {
      // mock of getters
      const _getters = {
        activeItemsByListId: getters.activeItemsByListId(state, {
          getListsById: getters.getListsById(state)
        })
      }

      expect(getters.activeItemsByListIdCount(state, _getters)('1')).to.equal(0)
      expect(getters.activeItemsByListIdCount(state, _getters)('2')).to.equal(2)
      expect(getters.activeItemsByListIdCount(state, _getters)('3')).to.equal(0)
    })
  })
})
