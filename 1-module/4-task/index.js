function checkSpam(str) {
  const word = str.toUpperCase();
  if (word.includes('1XBET') || word.includes('XXX')) {
    return true;
  } else {
    return false;
  } 
}
