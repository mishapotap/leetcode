// https://leetcode.com/problems/sort-the-people/
// let names = ["Mary", "John", "Emma"],
//   heights = [180, 165, 170];
// // Output: ["Mary","Emma","John"]
// var sortPeople = function (names, heights) {
//   let arr = new Array(names.length);
//   for (let i = 0; i < names.length; i++) {
//     arr[i] = { name: names[i], height: heights[i] };
//   }
//   return arr.sort((a, b) => b.height - a.height).map((item) => item.name);
//   // Второе решение лучше
//   // return names
//   //   .map((name, i) => [name, heights[i]])
//   //   .sort((a, b) => b[1] - a[1])
//   //   .map((name) => name[0]);
// };
// console.log(sortPeople(names, heights));
