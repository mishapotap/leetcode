// https://leetcode.com/problems/rings-and-rods/
// let rings = "B0B6G0R6R0R6G9";
// // Output: 1
// var countPoints = function (rings) {
//   let map = new Map();
//   for (let i = 1; i < rings.length; i = i + 2) {
//     if (map.has(rings[i])) {
//       map.set(rings[i], map.get(rings[i]) + rings[i - 1]);
//     } else {
//       map.set(rings[i], rings[i - 1]);
//     }
//   }
//   let res = 0;
//   map.forEach((value, key) => {
//     if (value.includes("R") && value.includes("G") && value.includes("B")) {
//       res++;
//     }
//   });
//   return res;
// };
// console.log(countPoints(rings));
