// https://leetcode.com/problems/boats-to-save-people/description/
// let people = [1, 2],
//   limit = 3,
//   people2 = [3, 2, 2, 1],
//   limit2 = 3,
//   people3 = [3, 5, 3, 4],
//   limit3 = 5;
// // Output: 1 / 3 / 4;
// var numRescueBoats = function (people, limit) {
//   people.sort((a, b) => b - a);
//   let r = people.length - 1;
//   let res = 0;
//   for (let l = 0; l <= r; l++) {
//     if (people[l] + people[r] <= limit) r--;
//     res++;
//   }
//   return res;
// };
// console.log(numRescueBoats(people2, limit2));
