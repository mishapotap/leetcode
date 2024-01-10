// https://leetcode.com/problems/matrix-diagonal-sum/
// let mat = [
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//   ],
//   mat2 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
// // Output: 8 / 25
// var diagonalSum = function (mat) {
//   // const length = mat.length;
//   // const isEven = length % 2 === 0;
//   // let res = 0;
//   // for (let row = 0, col = 0; row < length; row++, col++) {
//   //   res += mat[row][col];
//   // }
//   // for (let row = 0, col = length - 1; row < length; row++, col--) {
//   //   res += mat[row][col];
//   // }
//   // if (!isEven) {
//   //   const mid = Math.floor(length / 2);
//   //   res -= mat[mid][mid];
//   // }
//   // return res;
//   // Второе решение
//   // let res = 0;
//   // for (let r = 0, c = mat.length - 1; r < mat.length; r++, c--) {
//   //   res += mat[r][c];
//   //   if (r !== c) {
//   //     res += mat[r][c];
//   //   }
//   // }
//   // return res;
//   // Третье решение
//   let res = 0;
//   const length = mat.length;
//   for (let i = 0; i < length; i++) {
//     res += mat[i][i] + mat[i][length - 1 - i];
//   }
//   const isEven = length % 2 === 0;
//   if (!isEven) {
//     const mid = Math.floor(length / 2);
//     res -= mat[mid][mid];
//   }
//   return res;
// };
// console.log(diagonalSum(mat2));
