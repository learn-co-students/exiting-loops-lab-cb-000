function breakOut(array, changeValue, stopValue){
  for(let i=0, k=array.length; i < k; i++){
    if(array[i] === stopValue){
      break
    }else{
      array[i] = changeValue
    }
  }
  return array
}

function keepGoing(array, changeValue, stopValue){
  for(let i=0, k=array.length; i < k; i++){
    if(array[i] === stopValue){
      continue
    }else{
      array[i] = changeValue
    }
  }
  return array
}

function findBy(array, findFn){
  for(let i=0, k=array.length; i < k; i++){
    if(findFn(array[i])){
      return array[i]
    }
  }
  return null
}
