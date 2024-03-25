// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
// let nums = [4, 3, 2, 7, 8, 2, 3, 1];
// // Output: [2,3]
// // По условию надо написать решение в котором скорость O(n) и по памяти O(1)
// var findDuplicates = function (nums) {
//   let res = [];
//   // Мутируем исходный массив на негативные значения если их уже встречали
//   for (let i = 0; i < nums.length; i++) {
//     const num = Math.abs(nums[i]);
//     if (nums[num - 1] < 0) res.push(num);
//     nums[num - 1] *= -1;
//   }
//   return res;
// };
// console.log(findDuplicates(nums));
