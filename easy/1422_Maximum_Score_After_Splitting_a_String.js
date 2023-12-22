// https://leetcode.com/problems/maximum-score-after-splitting-a-string/
// let s = "011101",
//   s2 = "00111",
//   s3 = "1111";
// // Output: 5 / 5 / 3
// var maxScore = function (s) {
//   // Первое решение в лоб
//   // let res = 0;
//   // for (let i = 0; i < s.length - 1; i++) {
//   //   let local = 0;
//   //   for (let l = 0; l < i + 1; l++) {
//   //     if (s[l] === "0") local++;
//   //   }
//   //   for (let r = i + 1; r < s.length; r++) {
//   //     if (s[r] === "1") local++;
//   //   }
//   //   res = Math.max(res, local);
//   // }
//   // return res;
//   let res = 0;
//   let onesCount = 0;
//   let zerosCount = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "1") onesCount++;
//   }
//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i] === "0") {
//       zerosCount++;
//     } else {
//       onesCount--;
//     }
//     res = Math.max(res, zerosCount + onesCount);
//   }
//   return res;
// };
// console.log(maxScore(s3));
