// https://leetcode.com/problems/group-by/description
// Input:
// const array = [{ id: "1" }, { id: "1" }, { id: "2" }],
//   fn = function (item) {
//     return item.id;
//   };
// // Output:
// // {
// // 	"1": [{"id": "1"}, {"id": "1"}],
// // 	"2": [{"id": "2"}]
// // }
// Array.prototype.groupBy = function (fn) {
//   let res = {};
//   for (const item of this) {
//     const key = fn(item);
//     if (!res[key]) {
//       res[key] = [];
//     }
//     res[key].push(item);
//   }
//   return res;
// };
// console.log(array.groupBy(fn));
