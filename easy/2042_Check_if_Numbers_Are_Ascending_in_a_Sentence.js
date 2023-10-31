// https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
// let s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles";
// // Output: true
// var areNumbersAscending = function (s) {
//   // let arr = s.split(" ").filter((i) => !isNaN(i));
//   // for (let i = 1; i < arr.length; i++) {
//   //   if (+arr[i - 1] >= +arr[i]) return false;
//   // }
//   // return true;
//   // Второе более оптимальное решение
//   let prev = Number.MIN_VALUE;
//   for (const str of s.split(" ")) {
//     let val = +str;
//     if (!val) continue;
//     if (prev >= val) return false;
//     prev = val;
//   }
//   return true;
// };
// console.log(areNumbersAscending(s));
