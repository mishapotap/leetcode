// https://leetcode.com/problems/a-number-after-a-double-reversal/
// let num = 526,
//   num2 = 1800,
//   num3 = 0;
// // Output: true // false // true
// var isSameAfterReversals = function (num) {
//   // Первое решение в лоб (плохое)
//   // let str = num.toString();
//   // if (str.length === 1) return true;
//   // let rev1 = new Array(str.length);
//   // for (let i = 0; i < str.length; i++) {
//   //   rev1[str.length - 1 - i] = str[i];
//   // }
//   // rev1 = +rev1.join("");
//   // let rev1inStr = rev1.toString();
//   // let rev2 = new Array(rev1inStr.length);
//   // for (let i = 0; i < rev2.length; i++) {
//   //   rev2[rev1inStr.length - 1 - i] = rev1inStr[i];
//   // }
//   // return +rev2.join("") === num;
//   // Второе решение
//   let str = num.toString();
//   if (str.length === 1) return true;
//   return str.at(-1) !== "0";
// };
// console.log(isSameAfterReversals(num3));
