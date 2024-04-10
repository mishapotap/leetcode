// https://leetcode.com/problems/reveal-cards-in-increasing-order/description/
// let deck = [17, 13, 11, 2, 3, 5, 7];
// // Output: [2,13,3,11,5,17,7]
// var deckRevealedIncreasing = function (deck) {
//   let res = [];
//   deck.sort((a, b) => b - a); // [17,13,11,7,5,3,2]
//   while (deck.length) {
//     const card = deck.shift();
//     const last = res.pop();
//     if (last) res.unshift(last);
//     res.unshift(card);
//   }
//   return res;
// };
// console.log(deckRevealedIncreasing(deck));
