// https://leetcode.com/problems/two-sum/
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// let nums = [2, 7, 11, 15];
// let target = 9;
// var twoSum = function (nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(target - nums[i])) {
//       return [map.get(target - nums[i]), i];
//     } else {
//       map.set(nums[i], i);
//     }
//   }
//   return [];
// };
// console.log(twoSum(nums, target));
