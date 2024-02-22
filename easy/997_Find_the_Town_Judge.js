// https://leetcode.com/problems/find-the-town-judge/description/
// let n = 3,
//   trust = [
//     [1, 3],
//     [2, 3],
//   ],
//   n2 = 4,
//   trust2 = [
//     [1, 3],
//     [1, 4],
//     [2, 3],
//     [2, 4],
//     [4, 3],
//   ];
// // Output: 3 / 3
// var findJudge = function (n, trust) {
//   let trusts = new Array(n + 1).fill(0);
//   for (const [a, b] of trust) {
//     trusts[a] = trusts[a] - 1;
//     trusts[b] = trusts[b] + 1;
//   }
//   for (let i = 1; i < trusts.length; i++) {
//     if (trusts[i] === n - 1) return i;
//   }
//   return -1;
// };
// console.log(findJudge(n2, trust2));
