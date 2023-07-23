// https://leetcode.com/problems/reverse-prefix-of-word/
// let word = "abcdefd",
//   ch = "d",
//   word2 = "abcd",
//   ch2 = "z";
// // Output: "dcbaefd" / "abcd"
// var reversePrefix = function (word, ch) {
//   let index = word.indexOf(ch);
//   if (!index) return word;
//   return (
//     word
//       .slice(0, index + 1)
//       .split("")
//       .reverse()
//       .join("") + word.slice(index + 1, word.length)
//   );
// };
// console.log(reversePrefix(word, ch));
