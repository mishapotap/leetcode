// https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
// let blocks = "WBBWWBBWBW",
//   k = 7;
// // Output: 3
// // function getWCount(str) {
// //   let res = 0;
// //   for (let letter of str) {
// //     if (letter === "W") res++;
// //   }
// //   return res;
// // }
// var minimumRecolors = function (blocks, k) {
//   // let res = k;
//   // for (let l = 0; l < blocks.length - k + 1; l++) {
//   //   const window = blocks.substring(l, l + k);
//   //   res = Math.min(res, getWCount(window));
//   // }
//   // return res;
//   // Второе решение
//   let whiteCount = 0;
//   let ans = +Infinity;
//   let left = 0;
//
//   for (let r = 0; r < blocks.length; r++) {
//     if (blocks[r] === "W") whiteCount++; // Если есть буква W то повышаем счетчик белых
//
//     if (r - left + 1 === k) {
//       // Если у нас это окно нужной длины
//       ans = Math.min(ans, whiteCount); // Записываем в ответ минимальное значение
//       if (blocks[left] === "W") whiteCount--; // Если то значние которое мы сейчас передвинем было W то убираем его со счетчика тк его уже не будет в нашем новом диапазоне
//       left++; // Передвигаем указатель
//     }
//   }
//   return ans;
// };
// console.log(minimumRecolors(blocks, k));
