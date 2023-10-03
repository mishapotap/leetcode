// https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
// let nums = [0, 1, 2, 2, 3, 0, 4, 2],
//   val = 2,
//   nums2 = [3, 2, 2, 3],
//   val2 = 3;
// // Output: 5, nums = [0,1,4,0,3,_,_,_]
// // Output: 2, nums = [2,2,_,_]
// var removeElement = function (nums, val) {
//   let insertIndex = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[insertIndex] = nums[i];
//       insertIndex++;
//     }
//   }
//   return insertIndex;
//   // Тоже самое решение только короче
//   let index = 0;
//   for (const num of nums) {
//     if (num !== val) nums[index++] = num;
//   }
//   return index;
// };
// console.log(removeElement(nums, val));
