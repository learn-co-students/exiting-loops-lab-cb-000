function breakOut(arr, changeValue, stopValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === stopValue) {
      return arr
    }
    arr[i] = changeValue
  }
}

function keepGoing(array, changeValue, skipValue){
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue){
      continue
    }
    array[i] = changeValue
  }
  return array
}

function findBy(array, FindFn){
  for (let i = 0; i < array.length; i++) {
    if (FindFn(array[i])){
      return array[i]
    }
    }
}
