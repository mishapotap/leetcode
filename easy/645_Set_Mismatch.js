// https://leetcode.com/problems/set-mismatch/description/
// let nums = [1, 2, 2, 4],
//   nums2 = [2, 2],
//   nums3 = [3, 2, 2],
//   nums4 = [1, 1],
//   nums5 = [3, 3, 1];
// // Output: [2,3] / [2,1] / [2,1] / [1,2] / [3,2]
// var findErrorNums = function (nums) {
//   let map = new Map();
//   let res = Array(2);
//   for (const num of nums) {
//     if (map.has(num)) {
//       map.set(num, map.get(num) + 1);
//       res[0] = num;
//     }
//     map.set(num, 1);
//   }
//   for (let i = 1; i <= nums.length; i++) {
//     if (!map.has(i)) {
//       res[1] = i;
//       break;
//     }
//   }
//   return res;
// };
// console.log(findErrorNums(nums5));
