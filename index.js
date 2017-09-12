function breakOut(array, changeValue, stopValue) {
  for(let i = 0, l = array.length; i < l; i++) {
    if(array[i] === stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  var changed_arr = [];
  for(let i = 0, l = array.length; i < l; i++){
    if(array[i] === skipValue){
      changed_arr[i] = array[i];
      continue;
    }
    changed_arr[i] = changeValue;
  }
  return changed_arr;
}

function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i])) {
      return array[i];
    }
  }
  return null;
}
