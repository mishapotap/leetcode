// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/
// let students = [1, 1, 0, 0],
//   sandwiches = [0, 1, 0, 1],
//   students2 = [1, 1, 1, 0, 0, 1],
//   sandwiches2 = [1, 0, 0, 0, 1, 1];
// // Output: 0 / 3
// // 0 - circle
// // 1- square
// // students is a queue
// // sandwiches is a stack
// // students.length = sandwiches.length
// // if student dont want this sandwich he go to back of queue
// // how many students unable to eat
// var countStudents = function (students, sandwiches) {
//   // Первое решение O(n) / O(1)
//   let ones = 0;
//   let zeros = 0;
//   for (const student of students) {
//     student === 1 ? ones++ : zeros++;
//   }
//   let i = 0;
//   while (sandwiches[i] !== undefined) {
//     if (sandwiches[i] === 1) {
//       if (!ones) break;
//       ones--;
//     } else {
//       if (!zeros) break;
//       zeros--;
//     }
//     i++;
//   }
//   return sandwiches.length - i;
//   // Второе решение (хуже по скорости)
//   // let i = 0;
//   // while (students.includes(sandwiches[i])) {
//   //   students.splice(students.indexOf(sandwiches[i]), 1);
//   //   i++;
//   // }
//   // return students.length;
// };
// console.log(countStudents(students2, sandwiches2));
