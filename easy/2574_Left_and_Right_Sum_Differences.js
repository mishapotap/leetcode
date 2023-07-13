// https://leetcode.com/problems/left-and-right-sum-differences/
// let nums = [10, 4, 8, 3];
// // Input: nums = [10,4,8,3]
// // Output: [15,1,11,22]
// var leftRightDifference = function (nums) {
//   // let result = new Array(nums.length);
//   // let leftSumArr = new Array(nums.length);
//   // let rightSumArr = new Array(nums.length);
//   // let currLeftSum = 0;
//   // let currRightSum = 0;
//   // for (let i = 0; i < nums.length; i++) {
//   //   if (nums[i - 1]) {
//   //     currLeftSum += nums[i - 1];
//   //     leftSumArr[i] = currLeftSum;
//   //   } else {
//   //     leftSumArr[i] = 0;
//   //   }
//   // }
//   // for (let j = nums.length - 1; j >= 0; j--) {
//   //   if (nums[j + 1]) {
//   //     currRightSum += nums[j + 1];
//   //     rightSumArr[j] = currRightSum;
//   //   } else {
//   //     rightSumArr[j] = 0;
//   //   }
//   // }
//   // for (let i = 0; i < leftSumArr.length; i++) {
//   //   result[i] = Math.abs(leftSumArr[i] - rightSumArr[i]);
//   // }
//   // return result;
//   // Второе решение оптимизированное
//   let leftSumArr = new Array(nums.length);
//   let rightSumArr = new Array(nums.length);
//   let currLeftSum = 0;
//   let currRightSum = 0;
//   for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
//     if (nums[i - 1]) {
//       currLeftSum += nums[i - 1];
//       leftSumArr[i] = currLeftSum;
//     } else {
//       leftSumArr[i] = 0;
//     }
//     if (nums[j + 1]) {
//       currRightSum += nums[j + 1];
//       rightSumArr[j] = currRightSum;
//     } else {
//       rightSumArr[j] = 0;
//     }
//   }
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = Math.abs(leftSumArr[i] - rightSumArr[i]);
//   }
//   return nums;
// };
// console.log(leftRightDifference(nums));
