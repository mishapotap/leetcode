// https://leetcode.com/problems/path-crossing/
// let path = "NES",
//   path2 = "NESWW",
//   path3 = "ENNNNNNNNNNNEEEEEEEEEESSSSSSSSSS";
// // Output: false / true / false
// var isPathCrossing = function (path) {
//   const set = new Set();
//   let x = 0;
//   let y = 0;
//   set.add("0,0");
//   for (const char of path) {
//     if (char === "N") y++;
//     else if (char === "E") x++;
//     else if (char === "S") y--;
//     else x--;
//     const curr = `${x},${y}`;
//     if (set.has(curr)) return true;
//     set.add(curr);
//   }
//   return false;
// };
// console.log(isPathCrossing(path3));
