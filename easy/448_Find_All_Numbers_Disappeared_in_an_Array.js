// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description
let nums = [4, 3, 2, 7, 8, 2, 3, 1],
  nums2 = [1, 1];
// Output: [5,6] / [2]
var findDisappearedNumbers = function (nums) {
  // Changing nums to negative nums if num visited
  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);
    const index = num - 1;
    nums[index] = -Math.abs(nums[index]);
  }
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};
console.log(findDisappearedNumbers(nums));
