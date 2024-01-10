// https://leetcode.com/problems/number-of-visible-people-in-a-queue/
// let heights = [10, 6, 8, 5, 11, 9],
//   heights2 = [5, 1, 2, 3, 10],
//   heights3 = [3, 1, 5, 8, 6];
// // Output: [3,1,2,1,1,0] / [4,1,1,1,0] / [2,1,1,1,0]
// var canSeePersonsCount = function (heights) {
//   let res = new Int32Array(heights.length);
//   let stack = [];
//   for (let i = heights.length - 1; i >= 0; i--) {
//     const elem = heights[i];
//     // Если следующий миньон выше то в результат записываем 1
//     if (elem < stack.at(-1)) {
//       res[i]++;
//     } else {
//       // Если следующий миньон ниже то надо актуализировать наш monotonic stack, попутно считая количество видимых миньонов
//       while (stack.length > 0 && elem > stack.at(-1)) {
//         stack.pop();
//         res[i]++;
//       }
//       // Если в стеке еще что-то осталось плюсуем еще 1, тк это последний миньоно которого видим ещё
//       if (stack.length > 0) res[i]++;
//     }
//     stack.push(elem);
//   }
//   return res;
//   // Первое решение (brute force)
//   // let res = new Int32Array(heights.length);
//   // for (let i = 0; i < heights.length - 1; i++) {
//   //   let visible = 1;
//   //   let visibleMaxHeight = heights[i + 1];
//   //   for (let j = i + 2; j < heights.length; j++) {
//   //     if (visibleMaxHeight > heights[i]) break;
//   //     if (heights[j] > visibleMaxHeight) {
//   //       visible++;
//   //       visibleMaxHeight = heights[j];
//   //     }
//   //   }
//   //   res[i] = visible;
//   // }
//   // return res;
// };
// console.log(canSeePersonsCount(heights));
