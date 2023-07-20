// https://leetcode.com/problems/merge-strings-alternately/
// let word1 = "ab",
//   word2 = "pqrs";
// // Output: "apbqrs"
// var mergeAlternately = function (word1, word2) {
//   let res = "";
//   for (let i = 0; i < word1.length; i++) {
//     if (!word2[i]) {
//       break;
//     }
//     res += word1[i] + word2[i];
//   }
//   if (word1.length < word2.length) {
//     res += word2.slice(word1.length, word2.length);
//   } else if (word1.length > word2.length) {
//     res += word1.slice(word2.length, word1.length);
//   }
//   return res;
//   // Второе решение
//   // const length = Math.max(word1.length, word2.length);
//   // const result = [];
//   // for (let i = 0; i < length; i++) {
//   //   if (word1[i]) result.push(word1[i]);
//   //   if (word2[i]) result.push(word2[i]);
//   // }
//   // return result.join("");
// };
// console.log(mergeAlternately(word1, word2));
