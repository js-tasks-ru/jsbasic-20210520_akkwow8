function ucFirst(str) {
  if (str != '') {
  const word = str.substr(1);
  const firstLetter = str[0].toUpperCase();
    return firstLetter+word;
  } else {
    return ('');
  }
}
