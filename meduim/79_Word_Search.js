// https://leetcode.com/problems/word-search/description/
// let board = [
//     ["A", "B", "C", "E"],
//     ["S", "F", "C", "S"],
//     ["A", "D", "E", "E"],
//   ],
//   word = "ABCCED",
//   board2 = [
//     ["A", "B", "C", "E"],
//     ["S", "F", "C", "S"],
//     ["A", "D", "E", "E"],
//   ],
//   word2 = "SEE";
// // Output: true / true
// var exist = function (board, word) {
//   const rows = board.length;
//   const cols = board[0].length;
//   const paths = new Set();
//   const dfs = (row, col, i) => {
//     if (i === word.length) return true;
//     if (
//       row < 0 || // Вышли за границы
//       col < 0 || // Вышли за границы
//       row >= rows || // Вышли за границы
//       col >= cols || // Вышли за границы
//       word[i] !== board[row][col] || // Буква не соответствует искомой
//       paths.has(`${row}${col}`) // Уже использовали эту букву
//     )
//       return false;
//     paths.add(`${row}${col}`);
//     let res =
//       dfs(row + 1, col, i + 1) ||
//       dfs(row - 1, col, i + 1) ||
//       dfs(row, col + 1, i + 1) ||
//       dfs(row, col - 1, i + 1);
//     paths.delete(`${row}${col}`);
//     return res;
//   };
//   for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < cols; c++) {
//       if (dfs(r, c, 0)) return true;
//     }
//   }
//   return false;
// };
// console.log(exist(board2, word2));
