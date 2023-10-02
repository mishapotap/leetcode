// https://leetcode.com/problems/count-common-words-with-one-occurrence/
// let words1 = ["leetcode", "is", "amazing", "as", "is"],
//   words2 = ["amazing", "leetcode", "is", "amazing"];
// // Output: 1
// var countWords = function (words1, words2) {
//   let map = new Map();
//   let count = 0;
//   for (const word of words1) {
//     map.has(word) ? map.set(word, 0) : map.set(word, 1);
//   }
//   for (const word of words2) {
//     if (!map.has(word)) continue;
//     if (map.get(word) === 1) {
//       map.set(word, true);
//       count++;
//     } else if (map.get(word) === true) {
//       map.set(word, false);
//       count--;
//     }
//   }
//   return count;
// };
// console.log(countWords(words1, words2));
