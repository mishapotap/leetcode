// https://leetcode.com/problems/climbing-stairs/
// let n = 1,
//   n2 = 2,
//   n3 = 3,
//   n4 = 4,
//   n5 = 5,
//   n6 = 6,
//   n7 = 7;
// // Output: 1 / 2 / 3 / 5 / 8 / 13 / 21
// var climbStairs = function (n) {
//   if (n === 1) return 1;
//   let arr = new Array(n);
//   arr[0] = 1;
//   arr[1] = 2;
//   for (let i = 2; i < n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }
//   return arr[arr.length - 1];
// };
// console.log(climbStairs(n7));
