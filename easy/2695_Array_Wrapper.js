// ###########################
// https://leetcode.com/problems/array-wrapper/
// Input: nums = [[1,2],[3,4]], operation = "Add"
// Output: 10
// Explanation:
// 	const obj1 = new ArrayWrapper([1,2]);
// const obj2 = new ArrayWrapper([3,4]);
// obj1 + obj2; // 10

// Input: nums = [[23,98,42,70]], operation = "String"
// Output: "[23,98,42,70]"
// Explanation:
// 	const obj = new ArrayWrapper([23,98,42,70]);
// String(obj); // "[23,98,42,70]"
// let ArrayWrapper = function (nums) {
//   this.array = nums;
// };
//
// ArrayWrapper.prototype.valueOf = function () {
//   return this.array.reduce((acc, current) => acc + current, 0);
// };
//
// ArrayWrapper.prototype.toString = function () {
//   return `[${this.array.join(",")}]`;
// };
// const obj1 = new ArrayWrapper([1, 2]);
// const obj2 = new ArrayWrapper([3, 4]);
// console.log(obj1.toString());
// console.log(obj1.valueOf());
