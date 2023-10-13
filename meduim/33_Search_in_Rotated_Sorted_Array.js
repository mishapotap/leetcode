// https://leetcode.com/problems/search-in-rotated-sorted-array/
// let nums = [4, 5, 6, 7, 0, 1, 2],
//   target = 0,
//   nums2 = [4, 5, 6, 7, 0, 1, 2],
//   target2 = 3;
// // Output: 4
// var search = function (nums, target) {
//   // return nums.indexOf(target)
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) return mid;
//     if (nums[left] <= nums[mid]) {
//       // Лево отсортировано
//       if (nums[left] <= target && target <= nums[mid]) {
//         right = mid - 1; // Таргет левее
//       } else {
//         left = mid + 1; // Таргет справа
//       }
//     } else {
//       // Право отсортировано
//       if (nums[mid] <= target && target <= nums[right]) {
//         left = mid + 1; // Таргет справа
//       } else {
//         right = mid - 1; // Таргет левее
//       }
//     }
//   }
//   return -1;
// };
// console.log(search(nums, target));
