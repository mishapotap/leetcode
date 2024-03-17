// https://leetcode.com/problems/insert-interval/description/
// let intervals = [
//     [1, 2],
//     [3, 5],
//     [6, 7],
//     [8, 10],
//     [12, 16],
//   ],
//   newInterval = [4, 8];
// // Output: [[1,2],[3,10],[12,16]])
// var insert = function (intervals, newInterval) {
//   let res = [];
//   let i = 0;
//   let length = intervals.length;
//   // Пока максимальное число в интервале меньше чем минимальное в новом просто интерируемся и пушим в массив
//   while (i < length && intervals[i][1] < newInterval[0]) {
//     res.push(intervals[i]);
//     i++;
//   }
//   // Тут мы уже нашли место с которого мы начинаем добавлять интервал
//   // Обновляем переменную newInterval до тех пор пока мы не дойдем до интервала, минимум которого больше чем у насшего newInterval
//   while (i < length && intervals[i][0] <= newInterval[1]) {
//     newInterval = [
//       Math.min(newInterval[0], intervals[i][0]),
//       Math.max(newInterval[1], intervals[i][1]),
//     ];
//     i++;
//   }
//   // Пушим наш новый интервал
//   res.push(newInterval);
//   // Допушиваем оставшиеся интервалы
//   while (i < length) {
//     res.push(intervals[i]);
//     i++;
//   }
//   return res;
// };
// console.log(insert(intervals, newInterval));
