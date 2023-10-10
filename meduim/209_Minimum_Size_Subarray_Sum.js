// https://leetcode.com/problems/minimum-size-subarray-sum/
// let target = 7,
//   nums = [2, 3, 1, 2, 4, 3, 1, 2],
//   target2 = 4,
//   nums2 = [1, 4, 4],
//   target3 = 11,
//   nums3 = [1, 1, 1, 1, 1, 1, 1, 1];
// // Output: 2 / 1 / 0
// var minSubArrayLen = function (target, nums) {
//   let left = 0;
//   let res = Infinity;
//   let sum = 0;
//   for (let right = 0; right < nums.length; right++) {
//     sum += nums[right];
//     while (sum >= target) {
//       res = Math.min(res, right - left + 1);
//       sum -= nums[left];
//       left++;
//     }
//   }
//   return res === Infinity ? 0 : res;
// };
// console.log(minSubArrayLen(target, nums));
