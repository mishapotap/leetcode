// https://leetcode.com/problems/longest-consecutive-sequence/
// Input: nums = [100, 4, 200, 1, 3, 2];
// Output: 4;
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// let nums = [100, 4, 200, 1, 3, 2],
//   nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1],
//   nums3 = [1, 2, 0, 1]; // expected 3 output 2
// var longestConsecutive = function (nums) {
//   if (nums.length === 0) return 0;
//   const set = new Set(nums);
//   let max = 0;
//   for (let num of set) {
//     if (set.has(num - 1)) continue; // make sure starting from the beginning of sequence
//
//     let currNum = num;
//     let currMax = 1;
//     while (set.has(currNum + 1)) {
//       // Пока в сете есть числа на 1 больше добавляем +1
//       currNum++;
//       currMax++;
//     }
//     max = Math.max(max, currMax);
//   }
//
//   return max;
// };
// console.log(longestConsecutive(nums));
