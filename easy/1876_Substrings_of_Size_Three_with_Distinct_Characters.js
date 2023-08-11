// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
// let s = "xyzzaz",
//   s2 = "aababcabc";
// // Output: 1 // 4
// var countGoodSubstrings = function (s) {
//   let good = 0;
//   for (let left = 0; left < s.length - 2; left++) {
//     const window = [s[left], s[left + 1], s[left + 2]];
//     const chars = new Set(window);
//     if (chars.size === 3) good++;
//   }
//   return good;
// };
// console.log(countGoodSubstrings(s2));
