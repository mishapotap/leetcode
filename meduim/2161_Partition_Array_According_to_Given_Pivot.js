// https://leetcode.com/problems/partition-array-according-to-given-pivot/
// let nums = [9, 12, 5, 10, 14, 3, 10],
//   pivot = 10;
// // Output: [9,5,3,10,10,12,14]
// var pivotArray = function (nums, pivot) {
//   // Первое решение в лоб
//   // let pivots = [];
//   // let less = [];
//   // let more = [];
//   // for (const num of nums) {
//   //   if (num > pivot) more.push(num);
//   //   if (num < pivot) less.push(num);
//   //   if (num === pivot) pivots.push(num);
//   // }
//   // nums = [...less, ...pivots, ...more];
//   // return nums;
//   // Второе оптимизированное
//   let result = new Array(nums.length).fill(pivot);
//   let beforeI = 0;
//   let afterI = nums.length - 1;
//   for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
//     if (nums[i] < pivot) {
//       result[beforeI] = nums[i];
//       beforeI++;
//     }
//     if (nums[j] > pivot) {
//       result[afterI] = nums[j];
//       afterI--;
//     }
//   }
//   return result;
// };
// console.log(pivotArray(nums, pivot));
