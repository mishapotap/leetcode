// https://leetcode.com/problems/sum-of-unique-elements/
// let nums = [1, 2, 3, 2];
// // Output: 4
// var sumOfUnique = function (nums) {
//   let res = 0;
//   let map = new Map();
//   for (let num of nums) {
//     if (map.has(num)) {
//       map.set(num, map.get(num) + 1);
//     } else {
//       map.set(num, 1);
//     }
//   }
//   map.forEach((value, key) => {
//     if (value === 1) res += key;
//   });
//   map.clear();
//   return res;
//   // Через трюк с индексами для поиска уникальный ли этот элемент
//   // let res = 0;
//   // for (let i = 0; i < nums.length; i++) {
//   //   if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
// 	// 	res += nums[i];
//   //   }
//   // }
//   // return res;
// };
// console.log(sumOfUnique(nums));
