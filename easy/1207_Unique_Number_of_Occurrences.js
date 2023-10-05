// https://leetcode.com/problems/unique-number-of-occurrences/
// let arr = [1, 2, 2, 1, 1, 3],
//   arr2 = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0],
//   arr3 = [1, 2];
// // Output: true / true / false
// var uniqueOccurrences = function (arr) {
//   let map = new Map();
//   arr.forEach((num) =>
//     map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1)
//   );
//   return map.size === new Set(map.values()).size;
// };
// console.log(uniqueOccurrences(arr3));
