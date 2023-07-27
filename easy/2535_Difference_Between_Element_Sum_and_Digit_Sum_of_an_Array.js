// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/
// let nums = [1, 15, 6, 3];
// // Output: 9
// var differenceOfSum = function (nums) {
//   let elem = 0;
//   let digits = 0;
//   for (let i = 0; i < nums.length; i++) {
//     elem += nums[i];
//     let str = nums[i].toString();
//     if (str.length > 1) {
//       for (let digit of str) {
//         digits += +digit;
//       }
//     } else {
//       digits += nums[i];
//     }
//   }
//   return Math.abs(elem - digits);
// };
// console.log(differenceOfSum(nums));
