// https://leetcode.com/problems/custom-sort-string/description/
// let order = "cba",
//   s = "abcd",
//   order2 = "bcafg",
//   s2 = "abcd",
//   order3 = "kqep",
//   s3 = "pekeq",
//   order4 = "cba",
//   s4 = "abcdccc";
// // Output:  "cbad" / "bcad" / "kqeep" / "ccccbad"
// var customSortString = function (order, s) {
//   let map = new Map();
//   for (let i = 0; i < order.length; i++) {
//     map.set(order[i], i);
//   }
//   for (const char of s) {
//     if (!map.has(char)) map.set(char, Infinity);
//   }
//   return s
//     .split("")
//     .sort((a, b) => map.get(a) - map.get(b))
//     .join("");
//   // Второе решение минус одно O(n)
//   // let map = new Map();
//   // for (let i = 0; i < order.length; i++) {
//   //   map.set(order[i], i);
//   // }
//   // return s
//   //   .split("")
//   //   .sort((a, b) => (map.get(a) || -1) - (map.get(b) || -1))
//   //   .join("");
// };
// console.log(customSortString(order, s));
