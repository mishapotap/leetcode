// https://leetcode.com/problems/shortest-completing-word/description
let licensePlate1 = "1s3 PSt",
  words1 = ["step", "steps", "stripe", "stepple"],
  licensePlate2 = "1s3 456",
  words2 = ["looks", "pest", "stew", "show"],
  licensePlate3 = "Ah71752",
  words3 = [
    "suggest",
    "letter",
    "of",
    "husband",
    "easy",
    "education",
    "drug",
    "prevent",
    "writer",
    "old",
  ];
// Output: "steps" / "pest" / "husband"
var shortestCompletingWord = function (licensePlate, words) {
  let charsMap = new Map(); // { 's' => 2, 'p' => 1, 't' => 1 }
  let result; // result string
  for (const char of licensePlate) {
    const c = char.toLowerCase();
    if (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122)
      charsMap.set(c, charsMap.get(c) + 1 || 1);
  }
  for (const word of words) {
    if (canBeTyped(word) && (!result || result.length > word.length)) {
      result = word;
    }
  }
  // Check with a copy of map
  function canBeTyped(word) {
    let tmpMap = new Map(charsMap); // { 's' => 2, 'p' => 1, 't' => 1 }
    for (const char of word) {
      const currentCharCounter = tmpMap.get(char);
      if (currentCharCounter > 1) {
        tmpMap.set(char, currentCharCounter - 1);
      } else if (currentCharCounter === 1) {
        tmpMap.delete(char);
      }
      if (!tmpMap.size) return true; // If map is already cleared return true
    }
    return false;
  }
  return result;
};
console.log(shortestCompletingWord(licensePlate3, words3));
