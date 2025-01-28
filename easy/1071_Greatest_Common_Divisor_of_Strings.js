// https://leetcode.com/problems/greatest-common-divisor-of-strings/description/
// let str1 = "ABCABC",
//   str2 = "ABC",
//   str12 = "ABABAB",
//   str22 = "ABAB",
//   str13 = "LEET",
//   str23 = "CODE";
// // Output: "ABC" / "AB" / ""
// var gcdOfStrings = function (str1, str2) {
//   if (str1 + str2 !== str2 + str1) {
//     return "";
//   }
//   let minLength = Math.min(str1.length, str2.length);
//   for (let l = minLength; l > 0; l--) {
//     if (str1.length % l === 0 && str2.length % l === 0) {
//       return str1.substring(0, l);
//     }
//   }
// };
// console.log(gcdOfStrings(str13, str23));
