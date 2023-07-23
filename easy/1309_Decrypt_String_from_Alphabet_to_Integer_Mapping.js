// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
// let s = "10#11#12",
//   s2 = "1326#";
// // Output: "jkab" / "acz"
// const alphabet = {
//   1: "a",
//   2: "b",
//   3: "c",
//   4: "d",
//   5: "e",
//   6: "f",
//   7: "g",
//   8: "h",
//   9: "i",
//   "10#": "j",
//   "11#": "k",
//   "12#": "l",
//   "13#": "m",
//   "14#": "n",
//   "15#": "o",
//   "16#": "p",
//   "17#": "q",
//   "18#": "r",
//   "19#": "s",
//   "20#": "t",
//   "21#": "u",
//   "22#": "v",
//   "23#": "w",
//   "24#": "x",
//   "25#": "y",
//   "26#": "z",
// };
// var freqAlphabets = function (s) {
//   let res = "";
//   while (s) {
//     let chunk = s.slice(0, 3);
//     if (alphabet[chunk]) {
//       res += alphabet[chunk];
//       s = s.slice(3);
//     } else {
//       res += alphabet[s.slice(0, 1)];
//       s = s.slice(1);
//     }
//   }
//   return res;
//   // Второе решение через регулярку
//   // return s
//   // .match(/\d{2}(?=#)|\d/g)
//   // .map((num) => String.fromCharCode(96 + +num))
//   // .join("");
// };
// console.log(freqAlphabets(s));
