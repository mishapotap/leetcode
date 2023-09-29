// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
// let nums = [1, 2, 2, 1],
//   k = 1;
// // Output: 4
// var countKDifference = function (nums, k) {
//   let res = 0;
//   let map = new Map();
//   for (const num of nums) {
//     if (map.has(num - k)) {
//       res += map.get(num - k);
//     }
//     if (map.has(num + k)) {
//       res += map.get(num + k);
//     }
//     if (map.has(num)) {
//       map.set(num, map.get(num) + 1);
//     } else {
//       map.set(num, 1);
//     }
//   }
//   return res;
// };
// console.log(countKDifference(nums, k));
