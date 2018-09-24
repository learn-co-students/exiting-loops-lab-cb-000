const breakOut = (array, changeValue, stopValue) => {
  for(let i = 0; i < array.length; i++){
    if(array[i] !== stopValue){
      array[i] = changeValue
    } else {
      break;
    }
  }
  return array
}

// console.log(breakOut([1,1,1,1,2,1,1], 5, 2))

const keepGoing = (arr, changeValue, skipValue) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === skipValue){
        continue
    } else {
        arr[i] = changeValue;
    }
  }
  return arr
}

function findBy(arr, findFn) {
  for (let i = 0; i < arr.length; i++) {
    if (findFn(arr[i])) {
      return arr[i]
    }
  }
  return null
}
