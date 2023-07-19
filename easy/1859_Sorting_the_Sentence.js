// https://leetcode.com/problems/sorting-the-sentence/
// let s = "is2 sentence4 This1 a3";
// var sortSentence = function (s) {
//   let array = s.split(" ");
//   let result = new Array(array.length);
//   for (let i = 0; i < array.length; i++) {
//     result[array[i].at(-1) - 1] = array[i].slice(0, -1);
//   }
//   return result.join(" ");
//   return s
//     .split(" ")
//     .sort((a, b) => a.at(-1) - b.at(-1))
//     .map((item) => item.slice(0, -1))
//     .join(" ");
// };
// console.log(sortSentence(s));
