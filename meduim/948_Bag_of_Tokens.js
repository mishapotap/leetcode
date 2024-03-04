// https://leetcode.com/problems/bag-of-tokens/description/
// let tokens = [100],
//   power = 50,
//   tokens2 = [200, 100],
//   power2 = 150,
//   tokens3 = [100, 200, 300, 400],
//   power3 = 200,
//   tokens4 = [26],
//   power4 = 51,
//   tokens5 = [71, 55, 82],
//   power5 = 54;
// // Output: 0 / 1 / 2 / 1 / 0
// var bagOfTokensScore = function (tokens, power) {
//   // Sorting, Greedy, 2-pointers
//   tokens.sort((a, b) => a - b);
//   let currScore = 0;
//   let maxScore = 0;
//   let left = 0;
//   let right = tokens.length - 1;
//   while (left <= right) {
//     if (power >= tokens[left]) {
//       power -= tokens[left];
//       left++;
//       currScore++;
//       maxScore = Math.max(maxScore, currScore);
//     } else if (currScore > 0) {
//       // По условию не можем уходить в отрицательный currScore
//       power += tokens[right];
//       right--;
//       currScore--;
//     } else {
//       // Чтобы не уходить в бесконечный цикл тк мы не можем играть ни face-down ни face-up
//       break;
//     }
//   }
//   return maxScore;
// };
// console.log(bagOfTokensScore(tokens5, power5));
