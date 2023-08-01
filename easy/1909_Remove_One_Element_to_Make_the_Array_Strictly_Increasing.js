// https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/
// let nums = [1, 2, 10, 5, 7],
//   nums2 = [2, 3, 1, 2];
// // Output: true / false
// function IsIncreasing(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0) continue;
//     if (arr[i - 1] >= arr[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// var canBeIncreasing = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (IsIncreasing(nums.filter((num, index) => index !== i))) {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(canBeIncreasing(nums));
