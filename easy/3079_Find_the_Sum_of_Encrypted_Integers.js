// https://leetcode.com/problems/find-the-sum-of-encrypted-integers/
// let nums = [1, 2, 3],
//   nums2 = [10, 21, 31];
// // Output: 6 / 66;
// var sumOfEncryptedInt = function (nums) {
//   let res = 0;
//   for (const num of nums) {
//     let max = 0;
//     for (const char of num.toString()) {
//       max = Math.max(max, +char);
//     }
//     res += +max.toString().repeat(num.toString().length);
//   }
//   return res;
// };
// console.log(sumOfEncryptedInt(nums2));
