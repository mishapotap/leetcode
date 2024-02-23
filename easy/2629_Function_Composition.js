// https://leetcode.com/problems/function-composition/description/
// let functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x],
//   x = 4;
// // Output: 65
// var compose = function (functions) {
//   return function (x) {
//     let res = x;
//     for (let i = functions.length - 1; i >= 0; i--) {
//       console.log(res);
//       res = functions[i](res);
//     }
//     return res;
//   };
// };
// console.log(compose(functions));
