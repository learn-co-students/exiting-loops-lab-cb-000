function breakOut(array, changeValue, stopValue){
  for(var i = 0; i < array.length; i++){
    if(array[i] == stopValue){
      break
    }
    array[i] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for(var i = 0; i < array.length; i++){
    if(array[i] == skipValue){
      continue
    }
    array[i] = changeValue
  }
  return array
}

function findBy(array, findFn){
  var exist = null
  for(var i = 0; i < array.length; i++){
    if(findFn(array[i])){
      exist = array[i]
    }
  }
  return exist
}
