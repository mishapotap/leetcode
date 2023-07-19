// https://leetcode.com/problems/count-the-number-of-consistent-strings/
// let allowed = "ab",
//   words = ["ad", "bddd", "aaab", "baa", "badab"];
// var countConsistentStrings = function (allowed, words) {
//   let result = words.length;
//   for (let i = 0; i < words.length; i++) {
//     for (let j = 0; j < words[i].length; j++) {
//       if (!allowed.includes(words[i][j])) {
//         result -= 1;
//         break;
//       }
//     }
//   }
//   return result;
// };
// console.log(countConsistentStrings(allowed, words));
