// https://leetcode.com/problems/sqrtx/
// let x = 4,
//   x2 = 9;
// // Output: 2 / 3
// var mySqrt = function (x) {
//   let left = 0;
//   let right = x;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (mid * mid === x) {
//       return mid;
//     } else if (mid * mid > x) {
//       right = mid - 1;
//     } else if (mid * mid < x) {
//       left = mid + 1;
//     }
//   }
//   return x < right * right ? right - 1 : right;
// };
// console.log(mySqrt(x2));
