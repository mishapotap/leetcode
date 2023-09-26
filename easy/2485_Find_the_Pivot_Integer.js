// https://leetcode.com/problems/find-the-pivot-integer/
// let n = 8;
// // Output: 6
// // Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
// function countPivotSum(num) {
//   let sum = 0;
//   while (num !== 0) {
//     sum += num;
//     num -= 1;
//   }
//   return sum;
// }
// var pivotInteger = function (n) {
//   let integer = 0;
//   while (n >= 1) {
//     integer += n;
//     if (integer === countPivotSum(n)) return n;
//     n -= 1;
//   }
//   return -1;
// };
// console.log(pivotInteger(n));
