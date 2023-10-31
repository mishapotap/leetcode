// https://leetcode.com/problems/two-out-of-three/
// let nums1 = [1, 1, 3, 2],
//   nums2 = [2, 3],
//   nums3 = [3];
// // Output: [3,2]
// var twoOutOfThree = function (nums1, nums2, nums3) {
//   // let map = new Map();
//   // let res = [];
//   // for (const num of [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)]) {
//   //   map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
//   // }
//   // for (const [key, value] of map) {
//   //   if (value >= 2) res.push(key);
//   // }
//   // return res;
//   // Второе решение
//   let set = new Set();
//   let set1 = new Set(nums1);
//   let set2 = new Set(nums2);
//   let set3 = new Set(nums3);
//
//   set1.forEach(function (v) {
//     if (set2.has(v) || set3.has(v)) {
//       set.add(v);
//     }
//   });
//
//   set2.forEach(function (v) {
//     if (set3.has(v)) {
//       set.add(v);
//     }
//   });
//   return [...set];
// };
// console.log(twoOutOfThree(nums1, nums2, nums3));
