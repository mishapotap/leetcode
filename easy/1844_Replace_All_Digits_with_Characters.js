// https://leetcode.com/problems/replace-all-digits-with-characters/
// let s = "a1c1e1",
//   s2 = "a1b2c3d4e",
//   s3 = "v0g6s4d";
// // Output: "abcdef" / "abbdcfdhe" / "vvgmswd"
// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// function shift(c, x) {
//   return alphabet[alphabet.indexOf(c) + x];
// }
// var replaceDigits = function (s) {
//   return s
//     .split("")
//     .map((item, index, array) =>
//       isNaN(+item) ? item : shift(array[index - 1], +item)
//     )
//     .join("");
// };
// console.log(replaceDigits(s3));
