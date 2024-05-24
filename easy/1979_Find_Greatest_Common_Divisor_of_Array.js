// https://leetcode.com/problems/find-greatest-common-divisor-of-array/
// let nums = [2, 5, 6, 9, 10],
//   nums2 = [6, 7, 9];
// // Output: 2 // 3
// var findGCD = function (nums) {
//   let min = Infinity;
//   let max = 0;
//   for (let num of nums) {
//     if (num > max) max = num;
//     if (num < min) min = num;
//   }
//   let res = 1;
//   for (let i = 0; i <= max; i++) {
//     if (min % i === 0 && max % i === 0) res = i;
//   }
//   return res;
// };
// console.log(findGCD(nums2));
