// https://leetcode.com/problems/optimal-partition-of-string/
// let s = "abacaba";
// // Output: 4
// var partitionString = function (s) {
//   let res = 0;
//   let substr = "";
//   for (let i = 0; i < s.length; i++) {
//     if (substr.includes(s[i])) {
//       res += 1;
//       substr = s[i];
//     } else {
//       substr += s[i];
//     }
//   }
//   if (substr) res += 1;
//   return res;
// };
// console.log(partitionString(s));
