// https://leetcode.com/problems/subarrays-with-k-different-integers/description/
// let nums = [1, 2, 1, 2, 3],
//   k = 2,
//   nums2 = [1, 2, 1, 3, 4],
//   k2 = 3;
// // Output: 7 / 3
// var subarraysWithKDistinct = function (nums, k) {
//   // const slidingWindow = (nums, k) => {
//   //   let l = 0;
//   //   let res = 0;
//   //   const map = new Map();
//   //   for (let r = 0; r < nums.length; r++) {
//   //     map.set(nums[r], (map.get(nums[r]) || 0) + 1);
//   //     while (map.size > k) {
//   //       map.set(nums[l], map.get(nums[l]) - 1);
//   //       if (map.get(nums[l]) === 0) map.delete(nums[l]);
//   //       l++;
//   //     }
//   //     res += r - l + 1;
//   //   }
//   //   return res;
//   // };
//   // return slidingWindow(nums, k) - slidingWindow(nums, k - 1);
//   // Второе решение более оптимизированное Sliding window with 3 pointers
//   let map = new Map();
//   let l_far = 0;
//   let l_near = 0;
//   let res = 0;
//   for (let r = 0; r < nums.length; r++) {
//     const curr = nums[r];
//     map.set(curr, (map.get(curr) || 0) + 1);
//     while (map.size > k) {
//       map.set(nums[l_near], map.get(nums[l_near]) - 1);
//       if (map.get(nums[l_near]) === 0) map.delete(nums[l_near]);
//       l_near++;
//       l_far = l_near;
//     }
//     while (map.get(nums[l_near]) > 1) {
//       map.set(nums[l_near], map.get(nums[l_near]) - 1);
//       l_near++;
//     }
//     if (map.size === k) res += l_near - l_far + 1;
//   }
//   return res;
// };
// console.log(subarraysWithKDistinct(nums, k));
