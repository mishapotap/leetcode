// https://leetcode.com/problems/counting-words-with-a-given-prefix/
// let words = ["pay", "attention", "practice", "attend"],
//   pref = "at";
// // Output: 2
// var prefixCount = function (words, pref) {
//   // let res = 0;
//   // for (let i = 0; i < words.length; i++) {
//   //   let hasPref = true;
//   //   for (let j = 0; j < pref.length; j++) {
//   //     if (pref[j] !== words[i][j]) {
//   //       hasPref = false;
//   //       break;
//   //     }
//   //   }
//   //   res += hasPref;
//   // }
//   // return res;
//   // Второй способ (крутой)
//   let count = 0;
//   words.forEach((word) => {
//     if (word.startsWith(pref)) {
//       count++;
//     }
//   });
//   return count;
//   // Третий способ
//   // return words.filter((e) => e.indexOf(pref) === 0).length;
// };
// console.log(prefixCount(words, pref));
