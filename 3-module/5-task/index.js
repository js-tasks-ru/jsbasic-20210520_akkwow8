function getMinMax(str) {
  const arr = str.split(',');
  const arr2 = arr.join(' ');
  const arr3 = arr2.split(' ');
  const arr4 = arr3.filter((item) => {return parseFloat(item)});
  let result = {
    min: Math.min(...arr4),
    max: Math.max(...arr4)
}
  return result;
}
