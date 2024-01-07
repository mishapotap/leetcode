// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/
// let nums = [2, 3, 3, 2, 2, 4, 2, 3, 4],
//   nums2 = [2, 1, 2, 2, 3, 3],
//   nums3 = [2, 1, 2, 2, 3, 3, 1, 2, 2, 2, 2];
// // Output: 4 / -1 / 5
// var minOperations = function (nums) {
//   const map = new Map();
//   for (const num of nums) {
//     map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
//   }
//   let res = 0;
//   for (const [num, times] of map) {
//     if (times === 1) return -1;
//     res += Math.ceil(times / 3);
//   }
//   return res;
// };
// console.log(minOperations(nums));
