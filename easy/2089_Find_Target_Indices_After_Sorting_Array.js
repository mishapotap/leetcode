// https://leetcode.com/problems/find-target-indices-after-sorting-array/
// let nums = [1, 2, 5, 2, 3],
//   target = 2,
//   nums2 = [1, 2, 5, 2, 3],
//   target2 = 3;
// // Output: [1,2] / [3]
// var targetIndices = function (nums, target) {
//   let res = [];
//   nums
//     .sort((a, b) => a - b)
//     .forEach((num, index) => {
//       if (num === target) res.push(index);
//     });
//   return res;
// };
// console.log(targetIndices(nums2, target2));
