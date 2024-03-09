// https://leetcode.com/problems/count-elements-with-maximum-frequency/description/
// let nums = [1, 2, 2, 3, 1, 4],
//   nums2 = [1, 2, 3, 4, 5];
// // Output: 4 / 5
// var maxFrequencyElements = function (nums) {
//   let max = 0;
//   let map = new Map();
//   for (const num of nums) {
//     map.set(num, (map.get(num) || 0) + 1);
//     max = Math.max(max, map.get(num));
//   }
//   let count = 0;
//   for (const value of map.values()) {
//     if (value === max) count += value;
//   }
//   return count;
// };
// console.log(maxFrequencyElements(nums));
