// https://leetcode.com/problems/find-the-difference-of-two-arrays/
// let nums1 = [1, 2, 3],
//   nums2 = [2, 4, 6],
//   nums12 = [1, 2, 3, 3],
//   nums22 = [1, 1, 2, 2],
//   nums13 = [-80, -15, -81, -28, -61, 63, 14, -45, -35, -10],
//   nums23 = [-1, -40, -44, 41, 10, -43, 69, 10, 2];
// // Output: [[1,3],[4,6]] / [[3],[]]
// var findDifference = function (nums1, nums2) {
//   nums1 = new Set(nums1);
//   nums2 = new Set(nums2);
//   for (let num of nums1) {
//     if (nums2.has(num)) {
//       nums1.delete(num);
//       nums2.delete(num);
//     }
//   }
//   return [Array.from(nums1), Array.from(nums2)];
// };
// console.log(findDifference(nums12, nums22));
