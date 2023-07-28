// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
// let groupSizes = [2, 1, 3, 3, 3, 2],
//   groupSizes2 = [3, 3, 3, 3, 3, 1, 3];
// // Output: [[1],[0,5],[2,3,4]] / [[5],[0,1,2],[3,4,6]]
// var groupThePeople = function (groupSizes) {
//   let map = new Map();
//   for (let i = 0; i < groupSizes.length; i++) {
//     if (map.has(groupSizes[i])) {
//       map.set(groupSizes[i], [...map.get(groupSizes[i]), i]);
//     } else {
//       map.set(groupSizes[i], [i]);
//     }
//   }
//   let res = [];
//   map.forEach((value, key) => {
//     if (value.length <= key) {
//       res.push(value);
//     } else {
//       // let chunk = key
//       for (let i = 0; i < value.length; i += key) {
//         res.push(value.slice(i, i + key));
//       }
//       // console.log(value);
//       // console.log(value.split(3));
//       // while (value) {
//       //   res.push(value.splice(0, key));
//       // }
//     }
//   });
//   return res;
// };
// console.log(groupThePeople(groupSizes2));
