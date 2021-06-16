function camelize(str) {
  let arr = str.split('-');
  let result = arr.map(function(item,index) {
    if (index !=0) {
    word = item.substr(1);
  const firstLetter = item[0].toUpperCase();
    return firstLetter+word;
  } else {
    return item;
  }
  });
  return result.join("");
}
