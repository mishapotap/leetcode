// https://leetcode.com/problems/sort-array-by-parity-ii/
// let nums = [4, 2, 5, 7];
// // Output: [4,5,2,7]
// var sortArrayByParityII = function (nums) {
//   let res = new Array(nums.length);
//   for (let i = 0, even = 0, odd = 1; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//       res[even] = nums[i];
//       even += 2;
//     } else {
//       res[odd] = nums[i];
//       odd += 2;
//     }
//   }
//   return res;
// };
// console.log(sortArrayByParityII(nums));
