// https://leetcode.com/problems/lexicographically-smallest-palindrome/
// let s = "abcd",
//   s2 = "seven";
// Output: "abba" , "neven"
// var makeSmallestPalindrome = function (s) {
//   let res = s.split("");
//   let mid = Math.floor(s.length / 2);
//   for (let i = 0; i < mid; i++) {
//     if (!(s[i] > s[s.length - 1 - i])) {
//       res[s.length - 1 - i] = s[i];
//     } else if (s[i] > s[s.length - 1 - i]) {
//       res[i] = s[s.length - 1 - i];
//     }
//   }
//   return res.join("");
// };
// console.log(makeSmallestPalindrome(s));
