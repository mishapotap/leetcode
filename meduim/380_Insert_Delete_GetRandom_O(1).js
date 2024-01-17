// https://leetcode.com/problems/insert-delete-getrandom-o1/description/
// var RandomizedSet = function () {
//   this.map = new Map();
// };
// RandomizedSet.prototype.insert = function (val) {
//   if (this.map.has(val)) {
//     return false;
//   } else {
//     this.map.set(val, val);
//     return true;
//   }
// };
// RandomizedSet.prototype.remove = function (val) {
//   if (this.map.has(val)) {
//     this.map.delete(val);
//     return true;
//   } else {
//     return false;
//   }
// };
// RandomizedSet.prototype.getRandom = function () {
//   const array = Array.from(this.map.keys());
//   return array[Math.floor(Math.random() * array.length)];
// };
