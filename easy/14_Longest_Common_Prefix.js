// https://leetcode.com/problems/longest-common-prefix/
// let strs = ["flower", "flow", "flight"],
//   strs2 = ["dog", "racecar", "car"];
// // Output: "fl" / ""
// function isCommonPrefix(strs, index) {
//   let char = strs[0][index];
//   for (let i = 0; i < strs.length; i++) {
//     if (strs[i][index] !== char) return false;
//   }
//   return char;
// }
// var longestCommonPrefix = function (strs) {
//   let pref = "";
//   for (let i = 0; i < strs[0].length; i++) {
//     let next = isCommonPrefix(strs, i);
//     if (!next) return pref;
//     pref += next;
//   }
//   return pref;
// };
// console.log(longestCommonPrefix(strs2));
