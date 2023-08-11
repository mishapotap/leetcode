// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// let s = "pwwkew", // 3
//   s2 = "abcabcbb", // 3
//   s3 = "bbbbb", // 1
//   s4 = " ", // 1
//   s5 = "dvdf"; // 3
// var lengthOfLongestSubstring = function (s) {
//   let seen = new Set();
//   let longest = 0;
//   let left = 0;
//   for (let r = 0; r < s.length; r++) {
//     while (seen.has(s[r])) {
//       // While we have this elem in set
//       seen.delete(s[left]); // we move our window from left to right
//       left++; // increasing the left window index
//     }
//     seen.add(s[r]);
//     longest = Math.max(longest, seen.size);
//   }
//   return longest;
// };
// console.log(lengthOfLongestSubstring(s));
