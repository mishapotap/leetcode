// https://leetcode.com/problems/unique-morse-code-words/
// let words = ["gin", "zen", "gig", "msg"];
// const alphabet = {
//   a: ".-",
//   b: "-...",
//   c: "-.-.",
//   d: "-..",
//   e: ".",
//   f: "..-.",
//   g: "--.",
//   h: "....",
//   i: "..",
//   j: ".---",
//   k: "-.-",
//   l: ".-..",
//   m: "--",
//   n: "-.",
//   o: "---",
//   p: ".--.",
//   q: "--.-",
//   r: ".-.",
//   s: "...",
//   t: "-",
//   u: "..-",
//   v: "...-",
//   w: ".--",
//   x: "-..-",
//   y: "-.--",
//   z: "--..",
// };
// var uniqueMorseRepresentations = function (words) {
//   let set = new Set();
//   for (let i = 0; i < words.length; i++) {
//     let morseWord = "";
//     for (let j = 0; j < words[i].length; j++) {
//       morseWord += alphabet[words[i][j]];
//     }
//     set.add(morseWord);
//   }
//   return set.size;
// };
// console.log(uniqueMorseRepresentations(words));
