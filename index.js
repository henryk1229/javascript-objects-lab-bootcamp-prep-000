var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) { return Object.assign({}, object,{ [key]: value })} 
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { object[key] = value; return object } 
function deleteFromObjectByKey(object, key) { const newObj = Object.assign({}, Object); delete newObj.key; return newObj } 
function destructivelyDeleteFromObjectByKey(object, key) { const newObj = delete Object.key; return newObj }