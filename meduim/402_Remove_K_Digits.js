// https://leetcode.com/problems/remove-k-digits/description/
// let num = "1432219",
//   k = 3,
//   num2 = "10200",
//   k2 = 1,
//   num3 = "10",
//   k3 = 2,
//   num4 = "1432279",
//   k4 = 3;
// // Output: "1219" / "200" / "0" / "1227"
// var removeKdigits = function (num, k) {
//   let stack = [];
//   for (const digit of num) {
//     while (k > 0 && stack.length && stack.at(-1) > digit) {
//       stack.pop();
//       k--;
//     }
//     if (!stack.length && digit === "0") continue;
//     stack.push(digit);
//   }
//   return stack.slice(0, stack.length - k).join("") || "0";
// };
// console.log(removeKdigits(num4, k4));
