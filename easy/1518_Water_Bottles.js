// https://leetcode.com/problems/water-bottles/
// let numBottles = 9,
//   numExchange = 3,
//   numBottles2 = 15,
//   numExchange2 = 4;
// // Output: 13 / 19
// var numWaterBottles = function (numBottles, numExchange) {
//   let drink = numBottles; // Полные
//   let empty = numBottles; // Пустые
//   while (empty >= numExchange) {
//     // Пока пустых больше чем обменять можем
//     const newDrink = Math.floor(empty / numExchange); // Сколько новых бутылок выпито
//     drink += newDrink;
//     empty = (empty % numExchange) + newDrink;
//   }
//   return drink;
// };
// console.log(numWaterBottles(numBottles2, numExchange2));
