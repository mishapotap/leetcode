// https://leetcode.com/problems/group-anagrams/
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// var groupAnagrams = function (strs) {
//   let map = new Map();
//   for (const str of strs) {
//     const sorted = str.split("").sort().join("");
//     if (!map.has(sorted)) {
//       map.set(sorted, [str]);
//     } else {
//       map.set(sorted, [...map.get(sorted), str]);
//     }
//   }
//   return Array.from(map.values());
// };
//
// console.log(groupAnagrams(strs));
