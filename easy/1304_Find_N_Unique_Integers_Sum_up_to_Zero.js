// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
// var sumZero = function (n) {
//   let res = new Array(n);
//   let mid = Math.floor(n / 2);
//   for (let i = 0; i < mid; i++) {
//     res[i] = n - i;
//     res[res.length - 1 - i] = -n + i;
//   }
//   if (n % 2) res[mid] = 0;
//   return res;
// };
// console.log(sumZero(5));
