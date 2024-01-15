// https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/
// let matches = [
//     [1, 3],
//     [2, 3],
//     [3, 6],
//     [5, 6],
//     [5, 7],
//     [4, 5],
//     [4, 8],
//     [4, 9],
//     [10, 4],
//     [10, 9],
//   ],
//   matches2 = [
//     [2, 3],
//     [1, 3],
//     [5, 4],
//     [6, 4],
//   ];
// // Output: [[1,2,10],[4,5,7,8]] / [[1,2,5,6],[]]
// var findWinners = function (matches) {
//   let map = {};
//   for (const [winner, looser] of matches) {
//     if (!map[winner]) map[winner] = 0;
//     map[looser] ? (map[looser] += 1) : (map[looser] = 1);
//   }
//   let res = [[], []];
//   for (let player in map) {
//     if (map[player] === 0) res[0].push(player);
//     else if (map[player] === 1) res[1].push(player);
//   }
//   return res;
// };
// console.log(findWinners(matches));
