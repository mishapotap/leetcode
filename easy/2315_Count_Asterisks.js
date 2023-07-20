// https://leetcode.com/problems/count-asterisks/
// let s = "l|*e*et|c**o|*de|",
//   s2 = "yo|uar|e**|b|e***au|tifu|l";
// // Output: 2
// var countAsterisks = function (s) {
//   // let res = 0;
//   // let filtered = s
//   //   .split("|")
//   //   .filter((item, index) => !(index % 2))
//   //   .join("");
//   // for (let i = 0; i < filtered.length; i++) {
//   //   if (filtered[i] === "*") res += 1;
//   // }
//   // return res;
//   // Второе решение более классное
//   let res = 0;
//   s.split("|").forEach((sub, i) => {
//     if (i % 2 === 0) {
//       res += sub.split("").filter((c) => c === "*").length;
//     }
//   });
//   return res;
// };
// console.log(countAsterisks(s));
