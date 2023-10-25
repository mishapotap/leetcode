// https://leetcode.com/problems/simplify-path/
// let path = "/home/",
//   path2 = "/../",
//   path3 = "/home//foo/";
// // Output: "/home" / "/" / "/home/foo"
// var simplifyPath = function (path) {
//   let stack = [];
//   for (const part of path.split("/")) {
//     if (part === "" || part === ".") continue;
//     if (part === "..") {
//       stack.pop();
//     } else {
//       stack.push(part);
//     }
//   }
//   return "/" + stack.join("/");
// };
// console.log(simplifyPath(path));
