// https://leetcode.com/problems/rotate-string/description/
// let s = "abcde",
//   goal = "cdeab",
//   s2 = "abcde",
//   goal2 = "abced",
//   s3 = "bbbacddceeb",
//   goal3 = "ceebbbbacdd";
// // Output: true / false / true
// var rotateString = function (s, goal) {
//   for (let i = 0; i < s.length; i++) {
//     let lastIndex = s.length - 1;
//     s = s[lastIndex] + s.substring(0, lastIndex);
//     if (s === goal) return true;
//   }
//   return false;
//   // Второе решение через дублирование строки
//   // if (s.length !== goal.length) return false;
//   // const doubledS = s + s; // При s = "abcde" goal = "cdeab" doubledS = "abcdeabcde"
//   // return doubledS.includes(goal);
// };
// console.log(rotateString(s, goal));
