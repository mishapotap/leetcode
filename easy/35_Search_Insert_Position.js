// https://leetcode.com/problems/search-insert-position/
// let nums = [1, 3, 5, 6, 8, 10, 12, 13],
//   target = 5,
//   nums2 = [1, 3, 5, 6],
//   target2 = 2,
//   nums3 = [1, 3, 5, 6],
//   target3 = 7,
//   nums4 = [1, 3, 5, 6],
//   target4 = 0;
// // Output: 2 / 1 / 4 / 0
// var searchInsert = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   let middle;
//   while (left <= right) {
//     middle = Math.round((right - left) / 2) + left;
//     if (nums[middle] === target) {
//       return middle;
//     } else if (nums[middle] > target) {
//       right = middle - 1;
//     } else if (nums[middle] < target) {
//       left = middle + 1;
//     }
//   }
//   return target > nums[middle] ? middle + 1 : middle;
// };
// console.log(searchInsert(nums2, target2));
