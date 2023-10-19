// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
// let words = ["cat", "bt", "hat", "tree"],
//   chars = "atach",
//   words2 = ["hello", "world", "leetcode"],
//   chars2 = "welldonehoneyr";
// // Output: 6 / 10
//
// function canBeFormed(word, map) {
//   const letters = new Map(map);
//   for (const char of word) {
//     if (letters.has(char)) {
//       const prev = letters.get(char);
//       if (prev === 1) {
//         letters.delete(char);
//       } else {
//         letters.set(char, letters.get(char) - 1);
//       }
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
//
// var countCharacters = function (words, chars) {
//   const map = new Map();
//   for (const char of chars) {
//     map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
//   }
//   let res = "";
//   for (const word of words) {
//     if (canBeFormed(word, map)) res += word;
//   }
//   return res.length;
// };
// console.log(countCharacters(words, chars));
