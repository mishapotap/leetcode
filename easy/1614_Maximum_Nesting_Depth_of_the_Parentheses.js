// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/
// let s = "(1+(2*3)+((8)/4))+1",
//   s2 = "(1)+((2))+(((3)))",
//   s3 = "+(+(+)+)+";
// // Output: 3 / 3 / 2
// var maxDepth = function (s) {
//   // Решение по скорости 0(n) по памяти 0(1)
//   // let current = 0;
//   // let res = 0;
//   // for (const char of s) {
//   //   if (char === "(") res = Math.max(res, ++current);
//   //   if (char === ")") current--;
//   // }
//   // return res;
//   // Решение по скорости 0(n) по памяти 0(n) через стек
//   let stack = [];
//   let max = 0;
//   for (const char of s) {
//     if (char === "(") stack.push(char);
//     if (char === ")") stack.pop();
//     if (stack.length > max) max = stack.length;
//   }
//   return max;
// };
// console.log(maxDepth(s3));
