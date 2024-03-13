// https://leetcode.com/problems/repeated-substring-pattern/
// let s = "abab",
//   s2 = "aba",
//   s3 = "abcabcabcabc";
// // Output: true / false / true
// var repeatedSubstringPattern = function (s) {
//   let substr = s[0];
//   for (let i = 1; i <= s.length / 2; i++) {
//     // let timesToCopy = s.length / i;
//     if (substr.repeat(s.length / i) === s) return true;
//     substr += s[i];
//   }
//   return false;
// };
// console.log(repeatedSubstringPattern(s));
