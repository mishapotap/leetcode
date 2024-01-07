// https://leetcode.com/problems/minimum-number-game/
// let nums = [5, 4, 2, 3];
// // Output: [3,2,5,4]
// var numberGame = function (nums) {
//   nums.sort((a, b) => a - b);
//   const res = Array(nums.length);
//   for (let i = 0; i < nums.length; i += 2) {
//     res[i + 1] = nums[i];
//     res[i] = nums[i + 1];
//   }
//   return res;
// };
// console.log(numberGame(nums));
