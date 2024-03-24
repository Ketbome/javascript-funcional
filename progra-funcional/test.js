function mergeAlternately(word1, word2) {
  let maxLength = word1.length;
  if (maxLength < word2.length) {
    maxLength = word2.length;
  }
  let mergedWord = "";
  console.log(maxLength);
  for (let i = 0; i < maxLength; i++) {
    if (word1.length > i) {
      mergedWord += word1[i];
      console.log("entre");
    }
    if (word2.length > i) {
      mergedWord += word2[i];
    }
  }
  return mergedWord;
}

const result = mergeAlternately("hol", "chaooo");
console.log(result);
