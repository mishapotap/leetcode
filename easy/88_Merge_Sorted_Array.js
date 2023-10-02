// https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
// let nums1 = [1, 2, 3, 0, 0, 0],
//   m = 3,
//   nums2 = [2, 5, 6],
//   n = 3;
// // Output: [1,2,2,3,5,6]
// var merge = function (nums1, m, nums2, n) {
//   let nums1Index = m - 1;
//   let nums2Index = n - 1;
//   let insertPosition = m + n - 1;
//
//   while (nums2Index >= 0) {
//     if (nums1Index >= 0 && nums1[nums1Index] > nums2[nums2Index]) {
//       nums1[insertPosition] = nums1[nums1Index];
//       insertPosition--;
//       nums1Index--;
//     } else {
//       nums1[insertPosition] = nums2[nums2Index];
//       insertPosition--;
//       nums2Index--;
//     }
//   }
//   return nums1;
//
//   // Второе решение без переменных
//   while (n > 0) {
//     if (nums1[m - 1] > nums2[n - 1]) {
//       nums1[n + m - 1] = nums1[m - 1];
//       m--;
//     } else {
//       nums1[n + m - 1] = nums2[n - 1];
//       n--;
//     }
//   }
//   return nums1;
// };
// console.log(merge(nums1, m, nums2, n));
