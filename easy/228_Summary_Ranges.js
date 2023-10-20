// https://leetcode.com/problems/summary-ranges/
// let nums = [0, 2, 3, 4, 6, 8, 9],
//   nums2 = [0, 1, 2, 4, 5, 7];
// // Output: ["0","2->4","6","8->9"] / ["0->2","4->5","7"]
// var summaryRanges = function (nums) {
//   let res = [];
//   let start = nums[0];
//   for (let i = 1; i <= nums.length; i++) {
//     if (nums[i] - nums[i - 1] === 1) continue;
//     res.push(start === nums[i - 1] ? `${start}` : `${start}->${nums[i - 1]}`);
//     start = nums[i];
//   }
//   return res;
// };
// console.log(summaryRanges(nums2));
