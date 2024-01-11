// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// let digits = "23",
//   digits2 = "",
//   digits3 = "2";
// // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"] / [] / ["a","b","c"]
// const map = {
//   2: "abc",
//   3: "def",
//   4: "ghi",
//   5: "jkl",
//   6: "mno",
//   7: "pqrs",
//   8: "tuv",
//   9: "wxyz",
// };
// var letterCombinations = function (digits) {
//   // if (!digits) return [];
//   // let res = Array.from(map[digits[0]]);
//   // for (let i = 1; i < digits.length; i++) {
//   //   const letters = map[digits[i]];
//   //   let tmp = new Array(letters.length * res.length);
//   //   let index = 0;
//   //   for (const char of res) {
//   //     for (const letter of letters) {
//   //       tmp[index] = char + letter;
//   //       index++;
//   //     }
//   //   }
//   //   res = [...tmp];
//   // }
//   // return res;
//   // Второе чуть улучшенное решение
//   if (!digits) return [];
//   let res = [""];
//   for (let i = 0; i < digits.length; i++) {
//     // 234
//     const letters = map[digits[i]]; // 'def'
//     let tmp = [];
//     // [aa ab, ac]
//     for (const char of res) {
//       for (const letter of letters) {
//         tmp.push(char + letter);
//       }
//     }
//     res = tmp;
//   }
//   return res;
// };
// console.log(letterCombinations(digits));
