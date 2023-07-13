//https://leetcode.com/problems/chunk-array/
// let arr = [1, 2, 3, 4, 5],
//   size = 1;
// Output: [[1],[2],[3],[4],[5]]
// var chunk = function (arr, size) {
// let result = [];
// let current = [];
// for (let i = 0; i < arr.length; i++) {
//   if (current.length >= size) {
//     result.push(current);
//     current = [];
//     current.push(arr[i]);
//   } else {
//     current.push(arr[i]);
//   }
// }
// if (current.length) result.push(current);
// return result;
// Решение 2
// let result = [];
// while (arr.length) {
//   result.push(arr.slice(size));
// }
// return result;
// };
// console.log(chunk(arr, size));
