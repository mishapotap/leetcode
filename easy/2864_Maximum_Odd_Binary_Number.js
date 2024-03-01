// https://leetcode.com/problems/maximum-odd-binary-number/description/
// let s = "010",
//   s2 = "0101",
//   s3 = "01010001";
// // Output: "001" / "1001" / "11000001"
// var maximumOddBinaryNumber = function (s) {
//   let length = s.length;
//   let num = new Array(length).fill(0);
//   let hasOne = false;
//   let start = 0;
//   for (const char of s) {
//     if (char === "1") {
//       if (hasOne) {
//         num[start] = char;
//         start += 1;
//       } else {
//         num[length - 1] = char;
//         hasOne = true;
//       }
//     }
//   }
//   return num.join("");
//   // Короткое решение второе
//   let count = 0;
//   for (const char of s) {
//     if (char === "1") count++;
//   }
//   return "1".repeat(count - 1) + "0".repeat(s.length - count) + "1";
// };
// console.log(maximumOddBinaryNumber(s3));
