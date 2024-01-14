// https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/
// let firstWord = "acb",
//   secondWord = "cba",
//   targetWord = "cdb",
//   firstWord2 = "aaa",
//   secondWord2 = "a",
//   targetWord2 = "aab";
// // Output: true / false
// function sumOfWord(word) {
//   let res = "";
//   for (const char of word) {
//     res += char.charCodeAt(0) - 97;
//   }
//   return +res;
// }
// var isSumEqual = function (firstWord, secondWord, targetWord) {
//   return sumOfWord(firstWord) + sumOfWord(secondWord) === sumOfWord(targetWord);
// };
// console.log(isSumEqual(firstWord, secondWord, targetWord));
