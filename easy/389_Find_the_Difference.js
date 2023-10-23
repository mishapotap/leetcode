// https://leetcode.com/problems/find-the-difference/
// let s = "abcd",
//   t = "abcde",
//   s2 = "a",
//   t2 = "aa";
// // Output: "e"
// var findTheDifference = function (s, t) {
//   const map = new Map();
//   for (const char of s + t) {
//     map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
//   }
//   for (const [key, value] of map) {
//     if (value % 2 !== 0) return key;
//   }
//   // Второе решение короткое
//   // for (let letter of s) t = t.replace(letter, "");
//   // return t;
// };
// console.log(findTheDifference(s, t));
