// https://leetcode.com/problems/uncommon-words-from-two-sentences/
// let s1 = "this apple is sweet",
//   s2 = "this apple is sour",
//   s12 = "apple apple",
//   s22 = "banana";
// // Output: ["sweet","sour"] / ["banana"]
// var uncommonFromSentences = function (s1, s2) {
//   const arr = `${s1} ${s2}`.split(" ");
//   const map = new Map();
//   for (const word of arr) {
//     map.has(word) ? map.set(word, false) : map.set(word, true);
//   }
//   let res = [];
//   for (const [value, key] of map) {
//     if (key) res.push(value);
//   }
//   return res;
// };
// console.log(uncommonFromSentences(s1, s2));
