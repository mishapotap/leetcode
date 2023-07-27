// https://leetcode.com/problems/minimum-time-visiting-all-points/
// let points = [
//   [1, 1],
//   [3, 4],
//   [-1, 0],
// ];
// // Output: 7
// var minTimeToVisitAllPoints = function (points) {
//   let res = 0;
//   for (let i = 0; i < points.length - 1; i++) {
//     res += Math.max(
//       Math.abs(points[i][0] - points[i + 1][0]),
//       Math.abs(points[i][1] - points[i + 1][1])
//     );
//   }
//   return res;
// };
// console.log(minTimeToVisitAllPoints(points));
