
exports.min = function min (array) {
  if (array === undefined || array === null || array.length == 0){
    return 0;
  }
  else {
    let minArr = array[0];
    for (let i=1; i<array.length; i++){
      if (array[i]< minArr){
        minArr = array[i];
      }
    }
    return minArr;
  }
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length){
    let maxArr = array[0];
    for (let i=1; i<array.length; i++){
      if (array[i] > maxArr){
        maxArr = array[i];
      }
    }
    return maxArr;
  }
  else return 0;
}
exports.avg = function avg (array) {
  let sum = 0;
  let avgArr = 0;
  if (array == undefined || array === null || array.length == 0){
    return 0;
  }

  for (let i=0; i<array.length; i++){
    sum+=array[i];
  }
  avgArr = sum/array.length;
  return avgArr;
}
