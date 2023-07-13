// https://leetcode.com/problems/apply-transform-over-each-element-in-array/
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// let arr = [1, 2, 3],
//   fn = function plusone(n) {
//     return n + 1;
//   };
// var map = function (arr, fn) {
//   let result = [];
//   arr.forEach((item, index) => {
//     result.push(fn(item, index));
//   });
//   return result;
//   // Второе лучше
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = fn(arr[i], i);
//   }
//   return arr;
// };
// console.log(map(arr, fn));
