// https://leetcode.com/problems/daily-temperatures/
// let temperatures = [73, 74, 75, 71, 69, 72, 76, 73],
//   temperatures2 = [89, 62, 70, 58, 47, 47, 46, 76, 100, 70];
// // Output: [1,1,4,2,1,1,0,0] // [8,1,5,4,3,2,1,1,0,0]
// var dailyTemperatures = function (temperatures) {
//   let stack = [];
//   let res = new Int32Array(temperatures.length);
//   for (let i = 0; i < temperatures.length; i++) {
//     let top = stack[stack.length - 1]; // Верхний элемент в стеке
//     while (stack.length && temperatures[i] > temperatures[top]) {
//       let index = stack.pop(); // Индекс верхнего элемента в стеке
//       res[index] = i - index; // Записываем разницу индексов в результат
//       top = stack[stack.length - 1]; // Перезаписываем новый верхний элемент в стеке после pop
//     }
//     stack.push(i); // Пушим элемент в стек
//   }
//   return res;
// };
// console.log(dailyTemperatures(temperatures));
