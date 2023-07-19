// https://leetcode.com/problems/split-a-string-in-balanced-strings/
// let s = "RLRRRLLRLL";
// var balancedStringSplit = function (s) {
//   let RCount = 0;
//   let LCount = 0;
//   let counter = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "R") {
//       RCount += 1;
//     } else {
//       LCount += 1;
//     }
//     if (RCount && LCount && RCount === LCount) {
//       counter += 1;
//       RCount = 0;
//       LCount = 0;
//     }
//   }
//   return counter;
// };
// console.log(balancedStringSplit(s));
