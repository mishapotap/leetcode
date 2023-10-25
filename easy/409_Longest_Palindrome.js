// https://leetcode.com/problems/longest-palindrome/
// let s = "abccccdd",
//   s2 = "a";
// // Output: 7 / 1
// var longestPalindrome = function (s) {
//   // let map = new Map();
//   // let res = 0;
//   // for (const letter of s) {
//   //   map.has(letter) ? map.set(letter, map.get(letter) + 1) : map.set(letter, 1);
//   // }
//   // let added = false;
//   // for (const [key, value] of map) {
//   //   if (value % 2 === 0) res += value;
//   //   if (value % 2 === 1) {
//   //     res += value - 1;
//   //     if (!added) {
//   //       res += 1;
//   //       added = true;
//   //     }
//   //   }
//   // }
//   // return res;
//   // Второе решение
//   let set = new Set();
//   let res = 0;
//   for (const letter of s) {
//     if (set.has(letter)) {
//       set.delete(letter);
//       res += 2;
//     } else {
//       set.add(letter);
//     }
//   }
//   if (set.size) res++;
//   return res;
// };
// console.log(longestPalindrome(s));
