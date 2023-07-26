// https://leetcode.com/problems/neither-minimum-nor-maximum/
// let nums = [3, 2, 1, 4],
//   nums2 = [1, 2];
// // Output: 2 / -1
// var findNonMinOrMax = function (nums) {
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (i === 0) {
//       min = nums[i];
//       max = nums[i];
//       continue;
//     }
//     if (nums[i] > max) max = nums[i];
//     if (nums[i] < min) min = nums[i];
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== max && nums[i] !== min) return nums[i];
//   }
//   return -1;
// };
// console.log(findNonMinOrMax(nums2));
