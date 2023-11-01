// https://leetcode.com/problems/count-pairs-of-similar-strings/
// let words = ["aba", "aabb", "abcd", "bac", "aabc"];
// // Output: 2
// var similarPairs = function (words) {
//   let res = 0;
//   for (let i = 0; i < words.length; i++) {
//     let set = new Set(words[i]);
//     for (let j = i + 1; j < words.length; j++) {
//       let next = new Set(words[j]);
//       if (set.size !== next.size) continue;
//       if (new Set([...set, ...next]).size === set.size) res++;
//     }
//   }
//   return res;
// };
// console.log(similarPairs(words));
