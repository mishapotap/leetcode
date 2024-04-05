// https://leetcode.com/problems/make-the-string-great/
// let s = "leEeetcode",
//   s2 = "abBAcC";
// // Output: "leetcode" / ""
// var makeGood = function (s) {
//   let stack = [];
//   for (const char of s) {
//     if (
//       stack.length &&
//       char !== stack.at(-1) &&
//       char.toLowerCase() === stack.at(-1).toLowerCase()
//     )
//       stack.pop();
//     else stack.push(char);
//   }
//   return stack.join("");
// };
// console.log(makeGood(s2))
