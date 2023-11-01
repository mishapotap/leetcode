// https://leetcode.com/problems/minimum-string-length-after-removing-substrings/
// let s = "ABFCACDB";
// // Output: 2
// var minLength = function (s) {
//   // while (s.includes("AB") || s.includes("CD")) {
//   //   s = s.replace("AB", "");
//   //   s = s.replace("CD", "");
//   // }
//   // return s.length;
//   // Второе решение через stack
//   let stack = [];
//   for (const char of s) {
//     if (
//       (stack[stack.length - 1] === "A" && char === "B") ||
//       (stack[stack.length - 1] === "C" && char === "D")
//     ) {
//       stack.pop();
//     } else {
//       stack.push(char);
//     }
//   }
//   return stack.length;
// };
// console.log(minLength(s));
