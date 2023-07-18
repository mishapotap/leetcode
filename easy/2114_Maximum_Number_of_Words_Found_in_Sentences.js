// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
// let sentences = [
//   "alice and bob love leetcode",
//   "i think so too",
//   "this is great thanks very much",
// ];
// var mostWordsFound = function (sentences) {
//   // let max = 0;
//   // sentences.forEach((sentence) => {
//   //   let length = sentence.split(" ").length;
//   //   if (length > max) {
//   //     max = length;
//   //   }
//   // });
//   // return max;
//   // Второе
//   return Math.max(...sentences.map((item) => item.split(" ").length));
// };
// console.log(mostWordsFound(sentences));
