// https://leetcode.com/problems/find-the-k-beauty-of-a-number/
// let num = 430043,
//   k = 2;
// // Output: 2
// var divisorSubstrings = function (num, k) {
//   let str = num.toString();
//   let res = 0;
//   for (let l = 0; l < str.length - k + 1; l++) {
//     const window = str.substring(l, l + k);
//     if (num % +window === 0) res++;
//   }
//   return res;
// };
// console.log(divisorSubstrings(num, k));
