function breakOut(array, changeValue, stopValue) {
  for(let i = 0;  i < array.length; ++i)  {
    if(array[i] === stopValue) {
      break
    }
    array[i] = changeValue ;
  }
  return array
}


function keepGoing(array, changeValue, skipValue) {
  for(let i = 0;  i < array.length  ;  ++i) {
    if(array[i] === skipValue) {
      continue
    }
    array[i] = changeValue
  }
  return array
}

/*function callback(element) {
  if(element == c) {
    return true
  }
  return false
}
*/

function findBy(array, findfn) {
  for(let i = 0; i < array.length; i++) {
    if(findfn(array[i])) {
      return array[i]
    }
  }
  return null ;
}
