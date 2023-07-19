// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/
// let s = "U7:X9";
// ["U7","U8","U9","V7","V8","V9","W7","W8","W9","X7","X8","X9"]
// var cellsInRange = function (s) {
//   const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const digits = "123456789";
//   let rows = digits.slice(digits.indexOf(s[1]), digits.indexOf(s[4]) + 1);
//   let cols = alphabet.slice(alphabet.indexOf(s[0]), alphabet.indexOf(s[3]) + 1);
//   let result = [];
//   for (let i = 0; i < cols.length; i++) {
//     for (let j = 0; j < rows.length; j++) {
//       result.push(`${cols[i]}${rows[j]}`);
//     }
//   }
//   return result;
// };
// console.log(cellsInRange(s));
