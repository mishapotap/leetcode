// https://leetcode.com/problems/trapping-rain-water/
// let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
//   height2 = [4, 2, 0, 3, 2, 5];
// // Output: 6 / 9
// var trap = function (height) {
//   let maxLeft = height[0];
//   let maxRight = height[height.length - 1];
//   let lp = 0;
//   let rp = height.length - 1;
//   let water = 0;
//   while (lp <= rp) {
//     if (maxLeft <= maxRight) {
//       if (maxLeft - height[lp] > 0) water += maxLeft - height[lp];
//       maxLeft = Math.max(maxLeft, height[lp]);
//       lp += 1;
//     } else {
//       if (maxRight - height[rp] > 0) water += maxRight - height[rp];
//       maxRight = Math.max(maxRight, height[rp]);
//       rp -= 1;
//     }
//     // Можно оптимизировать тк мы уже обновили максимум и там не будет отрицательного числа
//     // if (maxLeft <= maxRight) {
//     //   maxLeft = Math.max(maxLeft, height[lp]);
//     //   water += maxLeft - height[lp];
//     //   lp += 1;
//     // } else {
//     //   maxRight = Math.max(maxRight, height[rp]);
//     //   water += maxRight - height[rp];
//     //   rp -= 1;
//     // }
//   }
//   return water;
// };
console.log(trap(height));
