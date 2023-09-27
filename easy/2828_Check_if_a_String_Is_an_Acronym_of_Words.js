// https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/
// let words = ["alice", "bob", "charlie"],
//   s = "abc",
//   words2 = ["an", "apple"],
//   s2 = "a";
// // Output: true
// // Output: false
// var isAcronym = function (words, s) {
// 	// Первый способ
//   let res = "";
//   words.forEach((word) => (res += word[0]));
//   return res === s;
// 	// Второй способ
//   if (words.length !== s.length) return false;
//   for (let i = 0; i < words.length; i++) {
//     if (words[i][0] !== s[i]) return false;
//   }
//   return true;
// };
// console.log(isAcronym(words, s));
