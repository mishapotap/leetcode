// https://leetcode.com/problems/binary-search/
// Input: (nums = [-1, 0, 3, 5, 9, 12]), (target = 9);
// Output: 4;
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// let nums = [-1, 0, 3, 5, 9, 12],
//   target = 9;
// var search = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   let middle;
//   while (left <= right) {
//     middle = Math.round((right - left) / 2) + left;
//     if (target === nums[middle]) {
//       return middle;
//     } else if (target < nums[middle]) {
//       right = middle - 1;
//     } else if (target > nums[middle]) {
//       left = middle + 1;
//     }
//   }
//   return -1;
// };
// console.log(search(nums, target));
