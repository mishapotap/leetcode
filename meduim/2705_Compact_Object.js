// https://leetcode.com/problems/compact-object/description
// let object = [null, 0, false, 1],
//   object2 = { a: null, b: [false, 1] },
//   object3 = [null, 0, 5, [0], [false, 16]];
// // Output: [1] / {"b": [1]} / [5, [], [16]]
//
// var compactObject = function (obj) {
//   // Решение 1 с мутированием
//   if (Array.isArray(obj)) {
//     return obj.filter(Boolean).map((value) => {
//       if (typeof value === "object") {
//         return compactObject(value);
//       }
//       return value;
//     });
//   }
//   for (const [key, value] of Object.entries(obj)) {
//     if (!value) {
//       delete obj[key];
//       continue;
//     }
//     if (typeof value === "object") {
//       obj[key] = compactObject(value);
//     }
//   }
//   return obj;
//   // Решение 2 через поиск в грубину
//   function dfs(obj) {
//     if (!obj) return false;
//     if (typeof obj !== "object") return obj;
//
//     if (Array.isArray(obj)) {
//       const newArr = [];
//       for (let i = 0; i < obj.length; i++) {
//         const curr = obj[i];
//         const subRes = dfs(curr);
//         if (subRes) {
//           newArr.push(subRes);
//         }
//       }
//       return newArr;
//     }
//     const newObj = {};
//
//     for (const key in obj) {
//       const subRes = dfs(obj[key]);
//       if (subRes) {
//         newObj[key] = subRes;
//       }
//     }
//     return newObj;
//   }
//   return dfs(obj);
// };
// console.log(compactObject(object3));
