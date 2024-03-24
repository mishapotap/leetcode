// https://leetcode.com/problems/merge-in-between-linked-lists/
// let list1 = [10, 1, 13, 6, 9, 5],
//   a = 3,
//   b = 4,
//   list2 = [1000000, 1000001, 1000002];
// // Output: [10,1,13,1000000,1000001,1000002,5]
// var mergeInBetween = function (list1, a, b, list2) {
//   let curr = list1;
//   let i = 0;
//   // Итерируемся по лист1 и останавливаемся перед нодой которую надо удалить
//   while (i < a - 1) {
//     curr = curr.next;
//     i++;
//   }
//   let head = curr; // [13, 6, 9, 5]
//   while (i <= b) {
//     curr = curr.next;
//     i++;
//   }
//   head.next = list2; // 13 теперь указывает на [1000000, 1000001, 1000002]
//   // Чтобы остановиться на последней ноде а не на null
//   while (list2.next) {
//     list2 = list2.next;
//   }
//   list2.next = curr; // head
//   return list1;
// };
