// https://leetcode.com/problems/strictly-palindromic-number/
// let n = 9;
// // Output: false
// function isPalindrome(str) {
//   let mid = Math.floor(str.length / 2);
//   for (let i = 0; i < mid; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// var isStrictlyPalindromic = function (n) {
//   for (let i = 2; i <= n - 2; i++) {
//     if (!isPalindrome(n.toString(i))) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isStrictlyPalindromic(n));
