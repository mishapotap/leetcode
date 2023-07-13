// https://leetcode.com/problems/allow-one-function-call/
// let fn = (a, b, c) => a + b + c;
// var once = function (fn) {
//   let called = false;
//   let result;
//   return function (...args) {
//     if (called) {
//       return undefined;
//     } else {
//       result = fn(...args);
//       called = true;
//       return result;
//     }
//   };
//   // Второй варик без промежуточного массива
//   let called = false;
//   return function (...args) {
//     if (called) {
//       return undefined;
//     } else {
//       called = true;
//       return fn(...args);
//     }
//   };
// };
// const onceFn = once(fn);
// console.log(onceFn([1, 2, 3]));
// console.log(onceFn([2, 3, 6]));
