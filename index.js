function breakOut(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
}

// function keepGoing(array, changeValue, skipValue) {
//   for (let i = 0, l = array.length; i < l; i++) {
//     if (array[i] === skipValue) {
//       continue;
//     }
//
//     array[i] = changeValue;
//   }
//   return array;
// }

function keepGoing(array, changeValue, skipValue) {
  array.forEach(function(callback, index, array) {
    if (array[index] === skipValue) {
      return
    }
    array[index] = changeValue;
  });
  return array;
}

function findBy(array,findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
    debugger
    if (findFn(array[i])) {
      return array[i]
    }
  }

  return null
}
