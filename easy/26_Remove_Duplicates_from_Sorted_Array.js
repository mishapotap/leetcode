// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
//   nums2 = [1, 1, 2];
// // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// // Output: 2, nums = [1,2,_]
// var removeDuplicates = function (nums) {
//   let k = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   return k;
// };
// console.log(removeDuplicates(nums));
