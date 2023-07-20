// https://leetcode.com/problems/find-maximum-number-of-string-pairs/
// let words = ["cd", "ac", "dc", "ca", "zz"];
// // Output: 2
// var maximumNumberOfStringPairs = function (words) {
//   let res = 0;
//   let map = new Map();
//   for (let i = 0; i < words.length; i++) {
//     if (map.has(words[i])) {
//       res += 1;
//     } else {
//       map.set(words[i].split("").reverse().join(""), i);
//     }
//   }
//   map.clear();
//   return res;
// };
// console.log(maximumNumberOfStringPairs(words));
