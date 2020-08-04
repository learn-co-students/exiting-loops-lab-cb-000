function breakOut(array, changeValue, stopValue) {
  for (let counter = 0; counter < array.length; counter += 1) {
    if (array[counter] === stopValue) {
      break
    } else {
      array[counter] = changeValue
    }
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (let counter = 0; counter < array.length; counter += 1) {
    if (array[counter] === skipValue) {
      continue
    } else {
      array[counter] = changeValue
    }
  }
  return array
}

function findBy(array, findFn) {
  let itemFound = null
  for (let counter = 0; counter < array.length; counter += 1) {
    if (findFn(array[counter])) {
      itemFound = array[counter]
      break
    } 
  }
  return itemFound
}
