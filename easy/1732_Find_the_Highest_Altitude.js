// https://leetcode.com/problems/find-the-highest-altitude/
// let gain = [-4, -3, -2, -1, 4, 3, 2];
// // Output: 0
// var largestAltitude = function (gain) {
//   let res = [0];
//   for (let i = 0; i < gain.length; i++) {
//   	res.push(res[i] + gain[i]);
//   }
//   return Math.max(...res);
//   // Второе решение без промежуточного массива на макс память
//   // gain.unshift(0);
//   // for (let i = 0; i < gain.length; i++) {
//   //   if (i === 0) continue;
//   //   gain[i] = gain[i - 1] + gain[i];
//   // }
//   // return Math.max(...gain);
// };
// console.log(largestAltitude(gain));
