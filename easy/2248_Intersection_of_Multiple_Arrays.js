// https://leetcode.com/problems/intersection-of-multiple-arrays/
// let nums = [
//     [3, 1, 2, 4, 5],
//     [1, 2, 3, 4],
//     [3, 4, 5, 6],
//   ],
//   nums2 = [
//     [7, 34, 45, 10, 12, 27, 13],
//     [27, 21, 45, 10, 12, 13],
//   ];
// // Output: [3,4] / [10,12,13,27,45]
// var intersection = function (nums) {
//   const map = new Map();
//   let res = [];
//   nums.forEach((arr) => {
//     arr.forEach((num) => {
//       map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
//     });
//   });
//   for (const [value, key] of map) {
//     if (key === nums.length) res.push(value);
//   }
//   return res.sort((a, b) => a - b);
// };
// console.log(intersection(nums2));
