// https://leetcode.com/problems/delete-columns-to-make-sorted/description/
// let strs = ["cba", "daf", "ghi"],
//   strs2 = ["a", "b"],
//   strs3 = ["zyx", "wvu", "tsr"];
// // Output: 1 / 0 / 3
// var minDeletionSize = function (strs) {
//   let res = 0;
//   for (let i = 0; i < strs[0].length; i++) {
//     let prev = strs[0].charCodeAt(i);
//     for (const str of strs) {
//       if (str.charCodeAt(i) < prev) {
//         res++;
//         break;
//       }
//       prev = str.charCodeAt(i);
//     }
//   }
//   return res;
// };
// console.log(minDeletionSize(strs));
