// https://leetcode.com/problems/subarray-product-less-than-k/description/
// let nums = [10, 5, 2, 6],
//   k = 100,
//   nums2 = [1, 2, 3],
//   k2 = 0,
//   nums3 = [2, 2, 10, 10],
//   k3 = 100;
// // Output: 8 / 0 / 7
// var numSubarrayProductLessThanK = function (nums, k) {
//   // Первое решение brute force
//   // let res = 0;
//   // for (let i = 0; i < nums.length; i++) {
//   //   if (nums[i] >= k) continue;
//   //   res++;
//   //   let curr = nums[i];
//   //   for (let j = i + 1; j < nums.length; j++) {
//   //     curr *= nums[j];
//   //     if (curr >= k) break;
//   //     res++;
//   //   }
//   // }
//   // return res;
//   // Второе решение более оптимальное sliding window
//   if (k <= 1) return 0;
//   let res = 0;
//   let product = 1;
//   let left = 0;
//   for (let right = 0; right < nums.length; right++) {
//     product *= nums[right];
//     while (left <= right && product >= k) {
//       product /= nums[left];
//       left++;
//     }
//     res += right - left + 1;
//   }
//   return res;
// };
// console.log(numSubarrayProductLessThanK(nums3, k3));
