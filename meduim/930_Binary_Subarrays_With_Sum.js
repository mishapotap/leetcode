// https://leetcode.com/problems/binary-subarrays-with-sum/description/
// let nums = [1, 0, 1, 0, 1],
//   goal = 2,
//   nums2 = [0, 0, 0, 0, 0],
//   goal2 = 0;
// // Output: 4 / 0
// var numSubarraysWithSum = function (nums, goal) {
//   // Bruteforce
//   // let res = 0;
//   // for (let i = 0; i < nums.length; i++) {
//   //   let curr = 0;
//   //   for (let j = i; j < nums.length; j++) {
//   //     curr += nums[j];
//   //     if (curr === goal) res++;
//   //     if (curr > goal) break;
//   //   }
//   // }
//   // return res;
//   // Prefix sum
//   let res = 0;
//   let currSum = 0;
//   let map = new Map();
//   map.set(0, 1); // Для того чтобы если мы метчимся уже в первом элементе то мы могли найти 0 который нам надо в остатке
//   for (const num of nums) {
//     currSum += num;
//     if (map.has(currSum - goal)) {
//       res += map.get(currSum - goal);
//     }
//     map.set(currSum, (map.get(currSum) || 0) + 1);
//   }
//   return res;
// };
// console.log(numSubarraysWithSum(nums, goal));
