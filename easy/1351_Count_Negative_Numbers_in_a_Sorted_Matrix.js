// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
// let grid = [
//     [4, 3, 2, -1],
//     [3, 2, 1, -1],
//     [1, 1, -1, -2],
//     [-1, -1, -2, -3],
//   ],
//   grid2 = [
//     [3, 2],
//     [1, 0],
//   ],
//   grid3 = [
//     [5, 1, 0],
//     [-5, -5, -5],
//   ];
// // Output: 8 / 0 / 3
// var countNegatives = function (grid) {
//   // const length = grid[0].length;
//   // let res = 0;
//   // for (const row of grid) {
//   //   let initial = 0;
//   //   for (const num of row) {
//   //     if (num <= -1) {
//   //       res += length - initial;
//   //       break;
//   //     }
//   //     initial++;
//   //   }
//   // }
//   // return res;
//   // Решение через binary search
//   const length = grid[0].length;
//   let res = 0;
//   for (const r of grid) {
//     let left = 0;
//     let right = length - 1;
//     let mid;
//     while (left <= right) {
//       mid = Math.floor((left + right) / 2);
//       if (r[mid] < 0) {
//         res += right - mid + 1;
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     }
//   }
//   return res;
// };
// console.log(countNegatives(grid));
