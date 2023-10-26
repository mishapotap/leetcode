// https://leetcode.com/problems/self-dividing-numbers/
// let left = 1,
//   right = 22;
// // Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
// let left2 = 47,
//   right2 = 85;
// // Output: [48,55,66,77]
// function isSelfDividing(num) {
//   let str = num.toString();
//   for (let i = 0; i < str.length; i++) {
//     if (num % +str[i] !== 0) return false;
//   }
//   return true;
// }
// var selfDividingNumbers = function (left, right) {
//   let res = [];
//   for (let i = left; i <= right; i++) {
//     if (isSelfDividing(i)) res.push(i);
//   }
//   return res;
// };
// console.log(selfDividingNumbers(left, right));
