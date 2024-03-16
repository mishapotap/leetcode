// https://leetcode.com/problems/contiguous-array/
// let nums = [0, 1],
//   nums2 = [0, 1, 0],
//   nums3 = [0, 0, 0, 1, 1, 1, 0];
// // Output: 2 / 2 / 6
// // https://www.youtube.com/watch?v=agB1LyObUNE&ab_channel=NeetCodeIO
// // Prefix sum + hashMap
// var findMaxLength = function (nums) {
//   let maxLength = 0;
//   const map = new Map();
//   let count = 0;
//   map.set(0, -1);
//
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       count--;
//     } else {
//       count++;
//     }
//
//     if (map.has(count)) {
//       maxLength = Math.max(maxLength, i - map.get(count));
//     } else {
//       map.set(count, i);
//     }
//   }
//   return maxLength;
// };
// console.log(findMaxLength(nums3));
