// https://leetcode.com/problems/task-scheduler/description/
// let tasks = ["A", "A", "A", "B", "B", "B"],
//   n = 2,
//   tasks2 = ["A", "C", "A", "B", "D", "B"],
//   n2 = 1,
//   tasks3 = ["A", "A", "A", "B", "B", "B"],
//   n3 = 3,
//   tasks4 = ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"],
//   n4 = 1,
//   tasks5 = ["A", "A", "A"],
//   n5 = 1;
// // Output: 8 / 6 / 10 / 12 / 5
// var leastInterval = function (tasks, n) {
//   const map = new Map();
//   for (const task of tasks) {
//     map.set(task, (map.get(task) || 0) + 1);
//   }
//   const array = Array.from(map.values());
//   array.sort((a, b) => b - a);
//   const chunk = array[0] - 1;
//   let idle = chunk * n;
//   for (let i = 1; i < array.length; i++) {
//     idle -= Math.min(chunk, array[i]);
//   }
//   return idle < 0 ? tasks.length : tasks.length + idle;
// };
// console.log(leastInterval(tasks2, n2));
