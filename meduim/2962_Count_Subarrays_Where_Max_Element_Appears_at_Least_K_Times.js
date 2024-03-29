// https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/description/
// let nums = [1, 3, 2, 3, 3],
//   k = 2,
//   nums2 = [1, 4, 2, 1],
//   k2 = 3;
// // Output: 6 / 0
// var countSubarrays = function (nums, k) {
//   let max = Math.max(...nums);
//   let count = 0;
//   let left = 0;
//   let res = 0;
//   for (let r = 0; r < nums.length; r++) {
//     if (nums[r] === max) count++;
//     while (count > k || (count === k && nums[left] !== max && left <= r)) {
//       if (nums[left] === max) count--;
//       left++;
//     }
//     if (count === k) res += left + 1;
//   }
//   return res;
//   // Второе решениее такое же по сложности но менее интуитивно понятное
//   // let max_number = Math.max(...nums);
//   // let max_count = 0;
//   // let left = 0;
//   // let res = 0;
//   // for (let r = 0; r < nums.length; r++) {
//   //   // Считаем вхождения нашего числа
//   //   //        l        r
//   //   //nums = [1, 3, 2, 3, 3],
//   //   if (nums[r] === max_number) max_count++;
//   //   // Пока число вхождений нужное мы сдвигаем левый указатель
//   //   while (max_count === k) {
//   //     if (nums[left] === max_number) max_count--;
//   //     left++;
//   //   }
//   //   // Пока у нас количество вхождений меньше мы будем добавлять 0
//   //   res += left;
//   // }
//   // return res;
// };
// console.log(countSubarrays(nums, k));
