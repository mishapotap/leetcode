// https://leetcode.com/problems/can-place-flowers/description
// let flowerbed = [1, 0, 0, 0, 1],
//   n = 1,
//   flowerbed2 = [1, 0, 0, 0, 1],
//   n2 = 2,
//   flowerbed3 = [0, 1, 0, 0, 0, 1],
//   n3 = 1,
//   flowerbed4 = [0, 1, 0, 0, 0, 1],
//   n4 = 2,
//   flowerbed5 = [1, 0, 0, 0, 0, 1],
//   n5 = 2,
//   flowerbed6 = [0, 0, 1, 0, 1],
//   n6 = 1;
// // Output: true / false / true / false / false / true
// var canPlaceFlowers = function (flowerbed, n) {
//   let freeSpots = 0;
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (flowerbed[i] === 1) {
//       i++;
//       continue;
//     }
//     const prevSpot = flowerbed[i - 1] === undefined || flowerbed[i - 1] === 0;
//     const nextSpot = flowerbed[i + 1] === undefined || flowerbed[i + 1] === 0;
//     if (flowerbed[i] === 0 && prevSpot && nextSpot) {
//       freeSpots++;
//       i++;
//     }
//   }
//   return freeSpots >= n;
// };
// console.log(canPlaceFlowers(flowerbed6, n6));
