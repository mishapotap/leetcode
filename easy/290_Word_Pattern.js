// https://leetcode.com/problems/word-pattern/
// let pattern = "abba",
//   s = "dog cat cat dog",
//   pattern2 = "aaaa",
//   s2 = "dog cat cat dog";
// // Output: true / false
// var wordPattern = function (pattern, s) {
//   let arr = s.split(" ");
//   let map = new Map();
//   let set = new Set();
//   if (pattern.length !== arr.length) return false;
//   for (let i = 0; i < pattern.length; i++) {
//     if (map.has(pattern[i])) {
//       if (map.get(pattern[i]) !== arr[i]) return false;
//     } else {
//       if (set.has(arr[i])) return false;
//       map.set(pattern[i], arr[i]);
//       set.add(arr[i]);
//     }
//   }
//   return true;
// };
// console.log(wordPattern(pattern, s));
