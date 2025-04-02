// https://leetcode.com/problems/max-consecutive-ones/description
let nums = [1, 1, 0, 1, 1, 1],
  nums2 = [1, 0, 1, 1, 0, 1];
// Output: 3 / 2
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let currentMax = 0;
  for (const num of nums) {
    if (num === 0) {
      currentMax = 0;
      continue;
    }
    currentMax++;
    max = Math.max(max, currentMax);
  }
  return max;
};
console.log(findMaxConsecutiveOnes(nums));
