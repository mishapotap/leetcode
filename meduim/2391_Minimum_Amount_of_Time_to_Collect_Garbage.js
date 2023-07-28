// https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/
// let garbage = ["G", "P", "GP", "GG"],
//   travel = [2, 4, 3];
// // Output: 21
// var garbageCollection = function (garbage, travel) {
//   // let map = new Map();
//   // for (let i = 0; i < garbage.length; i++) {
//   //   for (let j = 0; j < garbage[i].length; j++) {
//   //     if (map.has(garbage[i][j])) {
//   //       map.set(garbage[i][j], {
//   //         value: map.get(garbage[i][j]).value + 1,
//   //         lastIndex: i,
//   //       });
//   //     } else {
//   //       map.set(garbage[i][j], { value: 1, lastIndex: i });
//   //     }
//   //   }
//   // }
//   // let res = 0;
//   // map.forEach((val, key) => {
//   //   res += val.value;
//   //   for (let i = 0; i < val.lastIndex; i++) {
//   //     res += travel[i];
//   //   }
//   // });
//   // return res;
//   // Второе решение
//   let lastG = 0;
//   let lastP = 0;
//   let lastM = 0;
//   let res = 0;
//   for (let i = 0; i < garbage.length; i++) {
//     res += garbage[i].length;
//     if (garbage[i].includes("G")) {
//       lastG = i;
//     }
//     if (garbage[i].includes("P")) {
//       lastP = i;
//     }
//     if (garbage[i].includes("M")) {
//       lastM = i;
//     }
//   }
//   for (let i = 0; i < travel.length; i++) {
//     if (i + 1 <= lastG) {
//       res += travel[i];
//     }
//     if (i + 1 <= lastP) {
//       res += travel[i];
//     }
//     if (i + 1 <= lastM) {
//       res += travel[i];
//     }
//   }
//   return res;
// };
// console.log(garbageCollection(garbage, travel));
