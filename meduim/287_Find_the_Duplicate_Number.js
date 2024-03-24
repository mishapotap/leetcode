// https://leetcode.com/problems/find-the-duplicate-number/description/
// let nums = [1, 3, 4, 2, 2],
//   nums2 = [3, 1, 3, 4, 2];
// // Output: 2 / 3
// // По условию надо решить за O(1) по памяти и нельзя мутировать исходный массив
// var findDuplicate = function (nums) {
//   // Простое решение с O(1)
//   // for (const num of nums) {
//   //   if (nums.indexOf(num) !== nums.lastIndexOf(nums)) return num;
//   // }
//   // Floyd's cycle detection
//   let slow = 0;
//   let fast = 0;
//   while (true) {
//     slow = nums[slow];
//     fast = nums[nums[fast]];
//     if (slow === fast) break;
//   }
//   let slow2 = 0;
//   while (true) {
//     slow = nums[slow];
//     slow2 = nums[slow2];
//     if (slow === slow2) return slow;
//   }
// };
// console.log(findDuplicate(nums));
