// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/
// let seats = [4, 1, 5, 9],
//   students = [1, 3, 2, 6];
// var minMovesToSeat = function (seats, students) {
//   let res = 0;
//   seats.sort((a, b) => a - b);
//   students.sort((a, b) => a - b);
//   for (let i = 0; i < seats.length; i++) {
//     if (seats[i] !== students[i]) {
//       res += Math.abs(seats[i] - students[i]);
//     }
//   }
//   return res;
// };
// console.log(minMovesToSeat(seats, students));
