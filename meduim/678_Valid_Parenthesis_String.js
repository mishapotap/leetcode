// https://leetcode.com/problems/valid-parenthesis-string/description/
// let s = "()",
//   s2 = "(*)",
//   s3 = "(*))",
//   s4 = "((**())";
// // Output: true / true / true / true
// var checkValidString = function (s) {
//   const opened = [];
//   const stars = [];
//
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       opened.push(i);
//     } else if (s[i] === "*") {
//       stars.push(i);
//     } else {
//       if (opened.length > 0) {
//         opened.pop();
//       } else if (stars.length > 0) {
//         stars.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//
//   let i = opened.length - 1;
//   let j = stars.length - 1;
//
//   while (opened[i] < stars[j]) {
//     opened.pop();
//     stars.pop();
//     i--;
//     j--;
//   }
//
//   return opened.length === 0;
// };
// console.log(checkValidString(s4));
