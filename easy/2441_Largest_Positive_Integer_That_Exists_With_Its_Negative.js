// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
// let nums = [-1, 10, 6, 7, -7, 1],
//   nums2 = [-10, 8, 6, 7, -2, -3],
//   nums3 = [-1, 2, -3, 3];
// // Output: 7 / -1 / 3
// var findMaxK = function (nums) {
//   const map = new Map();
//   let res = -1;
//   for (const num of nums) {
//     if (num === 0) continue;
//     if (map.has(-num)) res = Math.max(Math.abs(num), res);
//     map.set(num, 1);
//   }
//   return res;
// };
// console.log(findMaxK(nums));
