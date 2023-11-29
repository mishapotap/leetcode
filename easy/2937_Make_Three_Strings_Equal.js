// https://leetcode.com/problems/make-three-strings-equal/
// let s1 = "abc",
//   s2 = "abb",
//   s3 = "ab";
// // Output: 2
// var findMinimumOperations = function (s1, s2, s3) {
//   let same = 0;
//   let length = Math.min(s1.length, s2.length, s3.length);
//   for (let i = 0; i < length; i++) {
//     if (s1[i] === s2[i] && s1[i] === s3[i]) {
//       same++;
//     } else {
//       break;
//     }
//   }
//   return same > 0 ? s1.length + s2.length + s3.length - same * 3 : -1;
// };
// console.log(findMinimumOperations(s1, s2, s3));
