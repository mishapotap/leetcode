// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// let nums = [5, 7, 7, 8, 8, 10],
//   target = 8,
//   nums2 = [5, 7, 7, 8, 8, 10],
//   target2 = 6;
// // Output: [3,4] / [-1,-1]
// var searchRange = function (nums, target) {
//   let res = [-1, -1];
//   if (!nums.length) return res;
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) {
//       res = [mid, mid];
//       let smaller = mid - 1;
//       let bigger = mid + 1;
//       while (nums[smaller] === target) {
//         res[0] = smaller;
//         smaller--;
//       }
//       while (nums[bigger] === target) {
//         res[1] = bigger;
//         bigger++;
//       }
//       return res;
//     } else if (target > nums[mid]) {
//       left = mid + 1;
//     } else if (target < nums[mid]) {
//       right = mid - 1;
//     }
//   }
//   return res;
// };
// console.log(searchRange(nums, target));
