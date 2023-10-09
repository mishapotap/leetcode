// https://leetcode.com/problems/isomorphic-strings/
// let s = "egg",
//   t = "add",
//   s2 = "foo",
//   t2 = "bar",
//   s3 = "paper",
//   t3 = "title",
//   s4 = "badc",
//   t4 = "baba";
// // Output: true / false / true / false / false
// // s can be replaced to get t
// var isIsomorphic = function (s, t) {
//   let map = new Map();
//   let str = "";
//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       if (map.get(s[i]) !== t[i]) return false;
//     } else {
//       if (str.includes(t[i])) return false;
//       map.set(s[i], t[i]);
//       str += t[i];
//     }
//   }
//   return true;
// };
// console.log(isIsomorphic(s3, t3));
