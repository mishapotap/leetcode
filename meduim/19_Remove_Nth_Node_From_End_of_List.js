// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
// let head = [1, 2, 3, 4, 5],
//   n = 2;
// // Output: [1,2,3,5]
// var removeNthFromEnd = function (head, n) {
//   let slow = head;
//   let fast = head;
//   // Сдвигаем быстрый указатель на нужное количество n
//   for (let i = 0; i < n; i++) fast = fast.next;
//   // Если fast null значит n - длина всего списка и значит мы просто удаляем первый элемент
//   if (!fast) return head.next;
//   // Двигаем параллельно два указателя пока не укажет на null
//   while (fast.next) {
//     slow = slow.next;
//     fast = fast.next;
//   }
//   // Удаляем ноду
//   slow.next = slow.next.next;
//   // Возвращаем список
//   return head;
// };
// console.log(removeNthFromEnd(head, n));
