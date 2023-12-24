// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
// let s = "0100",
//   s2 = "10",
//   s3 = "1111",
//   s4 = "0110101010";
// // Output: 1 / 0 / 2 / 2
// var minOperations = function (s) {
//   let zero = 0;
//   let one = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (i % 2) {
//       if (s[i] !== "1") zero++;
//       else one++;
//     } else {
//       if (s[i] === "1") zero++;
//       else one++;
//     }
//   }
//   return Math.min(zero, one);
// };
// console.log(minOperations(s4));
