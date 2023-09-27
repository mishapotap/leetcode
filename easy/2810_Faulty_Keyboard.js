// https://leetcode.com/problems/faulty-keyboard/
// let s = "string",
//   s2 = "poiinter";
// Output: "rtsng"
// Output: "ponter";
// Первое решение
// function reverseString(str) {
//   let res = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i];
//   }
//   return res;
// }
// var finalString = function (s) {
//   let res = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "i") {
//       res = reverseString(res);
//     } else {
//       res += s[i];
//     }
//   }
//   return res;
// };
// Второе решение
// var finalString = function (s) {
//   let res = [];
//   for (const char of s) {
//     if (char === "i") {
//       res = res.reverse();
//       continue;
//     }
//     res.push(char);
//   }
//   return res.join("");
// };
//
// console.log(finalString(s));
