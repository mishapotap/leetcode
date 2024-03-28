// https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/description/
// let nums = [1, 2, 3, 1, 2, 3, 1, 2],
//   k = 2,
//   nums2 = [1, 2, 1, 2, 1, 2, 1, 2],
//   k2 = 1,
//   nums3 = [5, 5, 5, 5, 5, 5, 5],
//   k3 = 4,
//   nums4 = [1, 2, 1, 2, 3, 1, 2, 1, 2, 4, 5],
//   k4 = 1,
//   nums5 = [1, 2, 2, 1, 3],
//   k5 = 1;
// // Output: 6 / 2 / 4 / 4 / 3
// var maxSubarrayLength = function (nums, k) {
//   // Мое первое решение (sliding window)
//   // let map = new Map();
//   // let res = 0;
//   // let left = 0;
//   // for (let r = 0; r < nums.length; r++) {
//   //   const curr = nums[r];
//   //   map.set(curr, (map.get(curr) || 0) + 1);
//   //   if (map.get(curr) > k) {
//   //     while (nums[left] !== curr) {
//   //       map.set(nums[left], map.get(nums[left]) - 1);
//   //       left++;
//   //     }
//   //     map.set(nums[left], map.get(nums[left]) - 1);
//   //     left++;
//   //   }
//   //   res = Math.max(res, r - left + 1);
//   // }
//   // return res;
//   // Второе решение с такой же сложность но почище (sliding window)
//   let map = new Map();
//   let res = 0;
//   let left = 0;
//   for (let r = 0; r < nums.length; r++) {
//     const curr = nums[r];
//     // Считаю кол-во вхождений
//     map.set(curr, (map.get(curr) || 0) + 1);
//     // Если их больше захожу в цикл
//     while (map.get(curr) > k) {
//       // Минусую из map количество вхождений крайнего левого значения window
//       map.set(nums[left], map.get(nums[left]) - 1);
//       left++;
//     }
//     // Результатом будет максимальная ширина window
//     res = Math.max(res, r - left + 1);
//   }
//   return res;
// };
// console.log(maxSubarrayLength(nums5, k5));
