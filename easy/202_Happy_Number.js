// https://leetcode.com/problems/happy-number/
// let n = 19,
//   n2 = 2;
// // Output: true / false
// function getSquareDigit(number) {
//   let res = 0;
//   for (const char of `${number}`) {
//     res += Math.pow(+char, 2);
//   }
//   return res;
// }
// var isHappy = function (n) {
//   const seen = new Set();
//   while (n !== 1) {
//     n = getSquareDigit(n);
//     if (seen.has(n)) return false;
//     seen.add(n);
//   }
//   return true;
// };
// console.log(isHappy(n));
