// https://leetcode.com/problems/time-needed-to-buy-tickets/description/
// let tickets = [2, 3, 2],
//   k = 2,
//   tickets2 = [5, 1, 1, 1],
//   k2 = 0,
//   tickets3 = [84, 49, 5, 24, 70, 77, 87, 8],
//   k3 = 3;
// // Output: 6 / 8
// var timeRequiredToBuy = function (tickets, k) {
//   // Первое решение в лоб (не прошло тест на скорость)
//   // let res = 0;
//   // let i = 0;
//   // while (tickets[k] !== 0) {
//   //   if (!tickets[i]) i = 0;
//   //   else {
//   //     if (tickets[i] !== 0) {
//   //       tickets[i]--;
//   //       res++;
//   //     }
//   //     i++;
//   //   }
//   // }
//   // return res;
//   // Второе решение
//   let res = 0;
//   for (let i = 0; i < tickets.length; i++) {
//     // Для людей перед искомым покупателем
//     if (i <= k) res += Math.min(tickets[i], tickets[k]);
//     // Для людей после искомого (если искомый хочет купить 3 а за ним хочет 5, то он не успеет купить 3, а только 3 - 1 = 2)
//     else res += Math.min(tickets[i], tickets[k] - 1);
//   }
//   return res;
// };
// console.log(timeRequiredToBuy(tickets, k));
