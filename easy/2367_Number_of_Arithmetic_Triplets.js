// https://leetcode.com/problems/number-of-arithmetic-triplets/
// let nums = [0, 1, 4, 6, 7, 10],
//   diff = 3;
// var arithmeticTriplets = function (nums, diff) {
//   let res = 0;
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let tmp = nums[i] - diff;
//     if (map.has(tmp) && map.has(tmp - diff)) {
//       res++;
//     }
//     map.set(nums[i], "Any");
//   }
//   return res;
// };
// console.log(arithmeticTriplets(nums, diff));
