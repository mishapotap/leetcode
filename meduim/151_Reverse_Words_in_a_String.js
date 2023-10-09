// https://leetcode.com/problems/reverse-words-in-a-string/
// let s = "the sky is blue",
//   s2 = "  hello world  ",
//   s3 = "a good   example",
//   s4 = "EPY2giL";
// // Output: "blue is sky the" / "world hello" / "example good a" / "EPY2giL"
// var reverseWords = function (s) {
//   let res = "";
//   let str = s.trim().split(" ");
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] !== "") {
//       if (res) res += " " + str[i];
//       else res = str[i];
//     }
//   }
//   return res;
//   // Через reduce
//   // return s
//   //   .split(" ")
//   //   .reduce((prev, current) => {
//   //     if (current !== "") {
//   //       prev.unshift(current);
//   //     }
//   //     return prev;
//   //   }, [])
//   //   .join(" ");
//   // Через массив
//   // let res = [];
//   // s.split(" ").map((x) => {
//   //   if (x !== "") {
//   //     res.unshift(x);
//   //   }
//   // });
//   // return res.join(" ");
//   // C trim
//   // let res = "";
//   // let word = "";
//   // let str = s.trim();
//   // for (let i = 0; i < str.length; i++) {
//   //   if (str[i] !== " ") {
//   //     word += str[i];
//   //     continue;
//   //   }
//   //   if (str[i] === " " && word) {
//   //     if (!res) res = word;
//   //     else res = word + " " + res;
//   //     word = "";
//   //   }
//   // }
//   // return res ? word + " " + res : word;
//   // Без trim
//   // let res = "";
//   // let word = "";
//   // for (let i = 0; i < s.length; i++) {
//   //   if (s[i] !== " ") {
//   //     word += s[i];
//   //     continue;
//   //   }
//   //   if (s[i] === " " && word) {
//   //     if (!res) {
//   //       res = word;
//   //     } else {
//   //       res = word + " " + res;
//   //     }
//   //     word = "";
//   //   }
//   // }
//   // if (word) {
//   //   if (res) res = word + " " + res;
//   //   else res = word;
//   // }
//   // return res;
// };
// console.log(reverseWords(s3));
