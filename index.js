function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) {
      array[i] = changeValue;
    } else {
      break;
    }

  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == skipValue) {
      continue;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn) {
  var num = findFn();
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i];
    } else {
      return null;
    }
  }
}

function findFn(n) {
  const c = Math.floor(Math.random() * 100);
  if (n === c) {
    return true;
  } else {
    return false;
  }
}
