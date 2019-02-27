import actions from '../../../../src/vuex/actions'
import { POPULATE_SHOPPING_LISTS, CHANGE_TITLE, ADD_ITEM } from '../../../../src/vuex/mutation_types'

describe('actions.js', () => {
  let store,
    lists,
    server,
    successPut,
    successPost,
    successDelete

  successPut = {put: true}
  successPost = {post: true}
  successDelete = {delete: true}

  beforeEach(() => {
    // mock shopping lists
    lists = [{
      id: '1',
      title: 'shopping list #1'
    }, {
      id: '2',
      title: 'shopping list #2'
    }]

    // mock store commit method and state
    store = {
      commit: (method, data) => {},
      dispatch: () => Promise.resolve(),
      state: {
        shoppinglists: lists
      }
    }

    // function (spy) with pre-programmed behavior
    // https://sinonjs.org/releases/v4.0.0/stubs/
    sinon.stub(store, 'commit')

    // mock server
    server = sinon.fakeServer.create()
    server.respondWith('GET', /shoppinglists/, xhr => {
      xhr.respond(200, {'Content-Type': 'application/json'}, JSON.stringify(lists))
    })
    server.respondWith('POST', /shoppinglists/, xhr => {
      xhr.respond(200, {'Content-Type': 'application/json'}, JSON.stringify(successPost))
    })
    server.respondWith('PUT', /shoppinglists/, xhr => {
      xhr.respond(200, {'Content-Type': 'application/json'}, JSON.stringify(successPut))
    })
    server.respondWith('DELETE', /shoppinglists/, xhr => {
      xhr.respond(200, {'Content-Type': 'application/json'}, JSON.stringify(successDelete))
    })

    // server will automatically respond to incoming requests
    // https://sinonjs.org/releases/v4.0.0/fake-xhr-and-server/#boolean-requestautorespond
    server.autoRespond = true
  })

  afterEach(() => {
    // restore stubs
    store.commit.restore()

    // restore server mock
    server.restore()
  })

  describe('populateShoppingLists', () => {
    it('should call commit method with POPULATE_SHOPPING_LIST string parameter', done => {
      actions.populateShoppingLists(store).then(() => {
        expect(store.commit).to.have.been.calledWith(POPULATE_SHOPPING_LISTS, lists)
        done()
      }).catch(done)
    })
  })

  describe('changeTitle', () => {
    it('should call commit method with CHANGE_TITLE string parameter', done => {
      actions.changeTitle(store, {id: '1', title: 'new title'}).then(() => {
        expect(store.commit).to.have.been.calledWith(CHANGE_TITLE, {id: '1', title: 'new title'})
        done()
      }).catch(done)
    })
  })

  describe('addItem', () => {
    it('should call commit method with ADD_ITEM string parameter', done => {
      actions.addItem(store, {id: '1', item: 'new item'}).then(() => {
        expect(store.commit).to.have.been.calledWith(ADD_ITEM, {id: '1', item: 'new item'})
        done()
      }).catch(done)
    })
  })

  describe('updateShoppingList', () => {
    it('should return the response that the PUT request has been successfully completed', done => {
      actions.updateShoppingList(store, '2').then(data => {
        expect(data.data).to.eql(successPut)
        done()
      }).catch(done)
    })
  })
})
