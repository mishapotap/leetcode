// https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/
// let nums = [1, 3, 4, 1, 2, 3, 1];
// Output: [[1,3,4,2],[1,3],[1]]
// var findMatrix = function (nums) {
// let result = [];
// let map = new Map();
// for (let i = 0; i < nums.length; i++) {
//   if (map.has(nums[i])) {
//     map.set(nums[i], map.get(nums[i]) + 1);
//   } else {
//     map.set(nums[i], 1);
//   }
// }
// let arrays = Math.max(...map.values());
// for (let i = 0; i < arrays; i++) {
//   result.push([]);
// }
// for (let [key, value] of map.entries()) {
//   for (let i = 0; i < value; i++) {
//     result[i].push(key);
//   }
// }
// map.clear();
// return result;
// Решение 2 Но не понял до конца
// let result = [];
// let map = new Map();
// for (let num of nums) {
//   let index = map.get(num) || 0;
//   let arr = result[index] || [];
//   arr.push(num);
//   result[index] = arr;
//   map.set(num, index + 1);
// }
// return result;
// };
// console.log(findMatrix(nums));
