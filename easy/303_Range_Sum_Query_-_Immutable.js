// https://leetcode.com/problems/range-sum-query-immutable/description/
// var NumArray = function (nums) {
//   this.array = nums;
// };
// NumArray.prototype.sumRange = function (left, right) {
//   let sum = 0;
//   while (left <= right) {
//     sum += this.array[left];
//     left++;
//   }
//   return sum;
// };
// // Второе крутое решение
// var NumArray = function (nums) {
//   this.calculated = [nums[0]];
//   for (let i = 1; i < nums.length; i++) {
//     this.calculated.push(this.calculated[this.calculated.length - 1] + nums[i]);
//   }
// };
// NumArray.prototype.sumRange = function (left, right) {
//   return this.calculated[right] - (left > 0 ? this.calculated[left - 1] : 0);
// };
