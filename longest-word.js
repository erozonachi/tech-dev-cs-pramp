function searchString(strSearch, word, strPos = 0, wordPos = 0) {
  if (word.length <= wordPos) {
    return true;
  }

  if (strSearch.length <= strPos && word.length > wordPos) {
    return false;
  }

  const foundAt = strSearch.indexOf(word[wordPos], strPos);

  if (foundAt >= 0) {
    return searchString(strSearch, word, foundAt + 1, wordPos + 1);
  } else {
    return false;
  }
}

function longestWord(searchStr, wordList) {
  let result = "";

  wordList.forEach(val => {
    if (val.length > result.length) {
      if (searchString(searchStr, val)) {
        result = val;
      }
    }
  });

  if (result.length > 0) {
    return result;
  }

  return null;
}

const S = "abppplee",
  D = new Set(["able", "ale", "apple", "bale", "kangaroo"]);

console.log(longestWord(S, D));
