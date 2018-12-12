export function generateId () {
  return 'id-' + Math.random().toString(36).substr(2, 9)
}
export function findWhere (arrayOfObjects, searchedProp) {
  let searchedObject = {}
  let searchedPropName = Object.keys(searchedProp)[0]
  let searchedPropValue = searchedProp[searchedPropName]

  arrayOfObjects.forEach((obj) => {
    if (obj[searchedPropName] === searchedPropValue) {
      searchedObject = obj
    }
  })

  return searchedObject
}
