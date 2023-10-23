// https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/
// let word1 = "cccddabba",
//   word2 = "babababab",
//   word12 = "abcdeef",
//   word22 = "abaaacc",
//   word13 = "aaaa",
//   word23 = "bccb";
// // Output: true / true / false
// var checkAlmostEquivalent = function (word1, word2) {
//   const map = new Map();
//   for (const char of word1) {
//     map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
//   }
//   for (const char of word2) {
//     map.has(char) ? map.set(char, map.get(char) - 1) : map.set(char, -1);
//   }
//   for (const [key, value] of map) {
//     if (Math.abs(value) > 3) return false;
//   }
//   return true;
// };
// console.log(checkAlmostEquivalent(word13, word23));
