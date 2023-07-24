// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
// let words = ["abc", "car", "ada", "racecar", "cool"];
// // Output: "ada"
// function iSPalindrome(str) {
//   let mid = Math.floor(str.length / 2);
//   for (let i = 0; i < mid; i++) {
//     if (str[i] !== str.at(-1 - i)) {
//       return false;
//     }
//   }
//   return true;
// }
// var firstPalindrome = function (words) {
//   for (let i = 0; i < words.length; i++) {
//     if (iSPalindrome(words[i])) return words[i];
//   }
//   return "";
// };
// console.log(firstPalindrome(words));
