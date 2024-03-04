// https://leetcode.com/problems/split-the-array/description/
// let nums = [1, 1, 2, 2, 3, 4],
//   nums2 = [1, 1, 1, 1],
//   nums3 = [1, 1, 2, 2, 5, 5, 3, 4];
// // Output: true / false / true
// var isPossibleToSplit = function (nums) {
//   // let map = new Map();
//   // for (const num of nums) {
//   //   map.set(num, map.has(num) ? map.get(num) + 1 : 1);
//   // }
//   // for (const [key, value] of map) {
//   //   if (value > 2) return false;
//   // }
//   // return true;
//   // Второе решение за 1 цикл
//   let map = new Map();
//   for (const num of nums) {
//     if (!map.has(num)) {
//       map.set(num, 1);
//     } else {
//       if (map.get(num) === 2) return false;
//       map.set(num, 2);
//     }
//   }
//   return true;
// };
// console.log(isPossibleToSplit(nums));
