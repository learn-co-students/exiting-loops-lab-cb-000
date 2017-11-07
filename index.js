// breakOut(array, changeValue, stopValue) which iterates through array and
// changes every element to changeValue until the loop reaches stopValue. Then
// we break out of the loop and return the array.

var breakOut = (arr, changeVal, stopVal) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === stopVal) {
      break;
    }
    arr[i] = changeVal;
  }
  return arr;
};

// keepGoing(array, changeValue, skipValue) which iterates through array and
// changes every element to changeValue except those that match skipValue. Then
// return the array.

var keepGoing = (arr, changeVal, skipVal) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === skipVal) {
      continue;
    }
    arr[i] = changeVal;
  }
  return arr;
};

// findBy(array, findFn) which looks for a value in array based on the return
// value of findFn. Return null if the value isn't found. Hint: Check the test
// file to know the signature of the findFn and the type of its return value

var findBy = (arr, findFn) => {
  for (let i = 0; i < arr.length; i++) {
    if (findFn(arr[i])) {
      return arr[i];
    }
  }
  return null;
};
