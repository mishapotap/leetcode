// https://leetcode.com/problems/product-of-array-except-self/
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// let nums = [1, 2, 3, 4];
// var productExceptSelf = function (nums) {
//   const result = [];
//   let beforeProduct = 1;
//   for (let i = 0; i < nums.length; i++) {
//     result[i] = beforeProduct;
//     beforeProduct *= nums[i];
//   }
//   let afterProduct = 1;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     result[i] *= afterProduct;
//     afterProduct *= nums[i];
//   }
//   return result;
// };
// console.log(productExceptSelf(nums));
