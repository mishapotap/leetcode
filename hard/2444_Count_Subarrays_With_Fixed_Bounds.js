// https://leetcode.com/problems/count-subarrays-with-fixed-bounds/description/
// let nums = [1, 3, 5, 2, 7, 5],
//   minK = 1,
//   maxK = 5,
//   nums2 = [1, 1, 1, 1],
//   minK2 = 1,
//   maxK2 = 1;
// // Output: 2 / 10
// var countSubarrays = function (nums, minK, maxK) {
//   let leftBound = -1;
//   let minKIndex = -1;
//   let maxKIndex = -1;
//   let res = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < minK || nums[i] > maxK) leftBound = i;
//     if (nums[i] === minK) minKIndex = i;
//     if (nums[i] === maxK) maxKIndex = i;
//     const smaller = Math.min(minKIndex, maxKIndex);
//     res += Math.max(0, smaller - leftBound);
//   }
//   return res;
// };
// console.log(countSubarrays(nums, minK, maxK));
