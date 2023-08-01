// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
// let s = "leetcode",
//   t = "practice";
// // Output: 5
// var minSteps = function (s, t) {
//   // let map = new Map();
//   // for (let i = 0; i < s.length; i++) {
//   //   if (map.has(s[i])) {
//   //     map.set(s[i], map.get(s[i]) + 1);
//   //   } else {
//   //     map.set(s[i], 1);
//   //   }
//   // }
//   // for (let i = 0; i < t.length; i++) {
//   //   if (map.has(t[i])) {
//   //     if (map.get(t[i]) === 1) {
//   //       map.delete(t[i]);
//   //     } else {
//   //       map.set(t[i], map.get(t[i]) - 1);
//   //     }
//   //   }
//   // }
//   // let res = 0;
//   // for (let value of map.values()) {
//   //   res += value;
//   // }
//   // return res;
//   // Второе решение
//   const base = 97;
//   let arr = new Int32Array(26);
//   for (let i = 0; i < s.length; ++i) {
//     arr[s.charCodeAt(i) - base] += 1;
//     arr[t.charCodeAt(i) - base] -= 1;
//   }
//   let steps = 0;
//   for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] > 0) {
//       steps += arr[i];
//     }
//   }
//   return steps;
// };
// console.log(minSteps(s, t));
