// https://leetcode.com/problems/top-k-frequent-elements/
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// let nums = [4, 3, 1, 1, 1, 2, 2, 2, 3],
//   k = 2;
// let nums2 = [1],
//   k2 = 1;
// var topKFrequent = function (nums, k) {
//   let map = new Map();
//   let result = new Array(k);
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       map.set(nums[i], map.get(nums[i]) + 1);
//     } else {
//       map.set(nums[i], 1);
//     }
//   }
//   // nums.forEach((n) => map.set(n, map.get(n) + 1 || 1));
//   let sortedArray = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
//   for (let j = 0; j < k; j++) {
//     result[j] = sortedArray[j][0];
//     // result.fill(sortedArray[j][0], j, j + 1);
//   }
//   return result;
// };
// console.log(topKFrequent(nums, k));
