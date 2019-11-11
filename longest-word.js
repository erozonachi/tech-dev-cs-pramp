function searchString(strSearch, word, strPos = 0, wordPos = 0) {
  if (word.length === wordPos) {
    return true;
  }

  if (strSearch.length === strPos && word.length > wordPos) {
    return false;
  }

  const foundAt = strSearch.indexOf(word[wordPos], strPos);

  if (foundAt) {
    return searchString(strSearch, word, foundAt + 1, wordPos++);
  }

  return false;
}
