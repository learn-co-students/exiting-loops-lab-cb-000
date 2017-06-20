function breakOut(array,changeValue,stopValue) {
  var arr = array;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === stopValue) {
      break;
    }
    else {
      arr[i] = changeValue;
    }
  }
  return arr;
}

function keepGoing(array,changeValue,skipValue) {
  var arr = array;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === skipValue) {
      continue;
    }
    else {
      arr[i] = changeValue;
    }
  }
  return arr;
}

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if(findFn(array[i])) {
      return array[i];
    }
  }
  return null;
}
