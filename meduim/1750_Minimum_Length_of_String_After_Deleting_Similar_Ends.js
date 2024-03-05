// https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/
// let s = "ca",
//   s2 = "cabaabac",
//   s3 = "aabccabba",
//   s4 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb";
// // Output: 2 / 0 / 3 / 1
// var minimumLength = function (s) {
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     let char = s[left];
//     if (char !== s[right]) break;
//     while (s[left] === char && left <= right) {
//       left++;
//     }
//     while (s[right] === char && left <= right) {
//       right--;
//     }
//   }
//   return right - left + 1;
// };
// console.log(minimumLength(s4));
