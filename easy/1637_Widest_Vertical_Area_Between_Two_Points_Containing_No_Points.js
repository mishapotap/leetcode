// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/
// let points = [
//     [8, 7],
//     [9, 9],
//     [7, 4],
//     [9, 7],
//   ],
//   points2 = [
//     [3, 1],
//     [9, 0],
//     [1, 0],
//     [1, 4],
//     [5, 3],
//     [8, 8],
//   ];
// // Output: 1 / 3
// var maxWidthOfVerticalArea = function (points) {
//   points.sort((a, b) => a[0] - b[0]);
//   let res = 0;
//   for (let i = 1; i < points.length; i++) {
//     const diff = points[i][0] - points[i - 1][0];
//     res = Math.max(diff, res);
//   }
//   return res;
// };
// console.log(maxWidthOfVerticalArea(points2));
