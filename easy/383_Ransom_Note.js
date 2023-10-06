// https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150
// let ransomNote = "aa",
//   magazine = "aab",
//   ransomNote2 = "aa",
//   magazine2 = "ab",
//   ransomNote3 = "a",
//   magazine3 = "b";
// // Output: true / false / false
// var canConstruct = function (ransomNote, magazine) {
//   let map = new Map();
//   for (let char of magazine) {
//     map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
//   }
//   for (let char of ransomNote) {
//     if (!map.has(char)) return false;
//     const charsLeft = map.get(char);
//     charsLeft === 1 ? map.delete(char) : map.set(char, charsLeft - 1);
//   }
//   return true;
// };
// console.log(canConstruct(ransomNote, magazine));
