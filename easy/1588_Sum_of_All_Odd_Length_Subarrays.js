// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/description/
// let arr = [1, 4, 2, 5, 3];
// // Output: 58
// var sumOddLengthSubarrays = function (arr) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       if ((j - i + 1) % 2 === 1) res += sum;
//     }
//   }
//   return res;
// };
// console.log(sumOddLengthSubarrays(arr));
