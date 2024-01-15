// https://leetcode.com/problems/maximum-number-of-words-you-can-type/
// let text = "hello world",
//   brokenLetters = "ad",
//   text2 = "leet code",
//   brokenLetters2 = "lt",
//   text3 = "leet code",
//   brokenLetters3 = "e";
// // Output: 1 / 1 / 0
// var canBeTypedWords = function (text, brokenLetters) {
//   const words = text.split(" ");
//   let res = words.length;
//   for (const word of words) {
//     for (const char of word) {
//       if (brokenLetters.includes(char)) {
//         res--;
//         break;
//       }
//     }
//   }
//   return res;
// };
// console.log(canBeTypedWords(text, brokenLetters));
