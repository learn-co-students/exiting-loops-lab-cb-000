function breakOut (array, changeValue, stopValue) {

  for (var i = 0; i < array.length; i++) {

    if (array[i] === stopValue) {

        return array

    }

    array[i] = changeValue;
  }



}

function keepGoing(array, changeValue, skipValue) {

  for (var i = 0; i < array.length; i++) {

    if (array[i] === skipValue) {

        continue

    }

    array[i] = changeValue;
  }


  // array.forEach ( (element, index) => {
  //   if (element === skipValue) {
  //     continue
  //   }
  //
  //   array[index] = changeValue
  // })

  return array


}

function findBy(array, findFn) {


  for (var i = 0; i < array.length; i++) {

    if (findFn(array[i])) {
      return array[i]
    }


  }

  return null





}
