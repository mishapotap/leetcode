// https://leetcode.com/problems/reverse-words-in-a-string-iii/
// let s = "Let's take LeetCode contest";
// Output: "s'teL ekat edoCteeL tsetnoc"
// var reverseWords = function (s) {
//   return s
//     .split(" ")
//     .map((item) => item.split("").reverse().join(""))
//     .join(" ");
// O(n) Complexity
// let result = "";
// let tmp = [];
// for (let i = 0; i < s.length; i++) {
//   if (s[i] === " ") {
//     result += tmp.join("") + " ";
//     tmp = [];
//   } else {
//     tmp.unshift(s[i]);
//   }
// }
// result += tmp.join("");
// return result;
// };
// console.log(reverseWords(s));
