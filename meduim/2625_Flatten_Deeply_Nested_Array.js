// https://leetcode.com/problems/flatten-deeply-nested-array/description
// let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// let n = 1;
// let arr2 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, [9, 10, 11], 12],
//   [13, 14, 15],
// ];
// let n2 = 2;
// // Output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15] / [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// var flat = function (arr, n) {
//   // Решение 1
//   if (n === 0) return arr;
//   let answer = [];
//   for (let i = 0; i < arr.length; i++) {
//     const elem = arr[i];
//     if (n > 0 && Array.isArray(elem)) {
//       answer.push(...flat(arr[i], n - 1));
//     } else {
//       answer.push(elem);
//     }
//   }
//   return answer;
//   // Решение 2
//   const res = [];
//
//   function dfs(arr, depth) {
//     for (const val of arr) {
//       if (depth > 0 && typeof val === "object") {
//         dfs(val, depth - 1);
//       } else {
//         res.push(val);
//       }
//     }
//     return res;
//   }
//   return dfs(arr, n);
// };
//
// console.log(flat(arr, n));
