// https://leetcode.com/problems/separate-the-digits-in-an-array/
// let nums = [13, 25, 83, 77];
// // Output: [1,3,2,5,8,3,7,7]
// var separateDigits = function (nums) {
//   let res = [];
//   for (let num of nums) {
//     num
//       .toString()
//       .split("")
//       .forEach((digit) => res.push(digit));
//   }
//   return res;
//   // Второе через reduce
//   // return nums.reduce((acc, num) => {
//   // 	num
//   // 	.toString()
//   // 	.split("")
//   // 	.forEach((digit) => acc.push(digit));
//   // 	return acc;
//   // }, []);
// };
// console.log(separateDigits(nums));
