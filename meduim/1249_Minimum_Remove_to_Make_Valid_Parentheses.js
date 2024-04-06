// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/
// let s = "lee(t(c)o)de)",
//   s2 = "a)b(c)d",
//   s3 = "))((",
//   s4 = "(((lee(t(c)o)de)";
// // Output: "lee(t(c)o)de" / "ab(c)d" / "" / "(lee(t(c)o)de)"
// var minRemoveToMakeValid = function (s) {
//   s = s.split("");
//   let stack = [];
//   // Чистим лишние ")"
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") stack.push(i); // Пушим индексы потенциально лишних "("
//     else if (s[i] === ")") {
//       if (stack.length) stack.pop();
//       else s[i] = ""; // Если в стеке ничего нет то сразу удаляем невалидную скобку
//     }
//   }
//   // Чистим лишние "(" индексы которых у нас остались в стеке
//   for (const index of stack) s[index] = "";
//   return s.join("");
// };
// console.log(minRemoveToMakeValid(s4));
