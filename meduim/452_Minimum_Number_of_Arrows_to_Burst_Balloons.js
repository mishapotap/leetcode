// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/
// let points = [
//     [10, 16],
//     [2, 8],
//     [1, 6],
//     [7, 12],
//   ],
//   points2 = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7, 8],
//   ],
//   points3 = [
//     [3, 9],
//     [7, 12],
//     [3, 8],
//     [6, 8],
//     [9, 10],
//     [2, 9],
//     [0, 9],
//     [3, 9],
//     [0, 6],
//     [2, 8],
//   ];
// // Output: 2 / 4 / 2
// var findMinArrowShots = function (points) {
//   if (points.length === 1) return 1;
//   points.sort((a, b) => a[1] - b[1]);
//   let index = 0;
//   let shots = 0;
//   let nextIndex = 1;
//   while (index < points.length) {
//     let currShots = 1;
//     while (
//       points[nextIndex] &&
//       points[index][1] >= points[nextIndex][0] &&
//       points[index][1] <= points[nextIndex][1]
//     ) {
//       nextIndex++;
//     }
//     index = nextIndex;
//     nextIndex++;
//     shots += currShots;
//   }
//   return shots;
// };
// console.log(findMinArrowShots(points3));
