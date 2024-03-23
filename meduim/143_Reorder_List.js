// https://leetcode.com/problems/reorder-list/description/
// let head = [1, 2, 3, 4, 5];
// // Output: [1,5,2,4,3]
// var reorderList = function (head) {
//   // // Первое решение с O(n) по памяти
//   // let stack = [];
//   // let node = head;
//   // // if (!node) return;
//   // while (node) {
//   //   stack.push(node);
//   //   node = node.next;
//   // }
//   // let length = stack.length;
//   // node = head;
//   // for (let i = 0; i < length; i++) {
//   //   if (i % 2 === 0) node.next = stack.shift();
//   //   else node.next = stack.pop();
//   //   node = node.next;
//   // }
//   // node.next = null;
//   // Второе решение с O(1) по памяти
//   let slow = head,
//     fast = head;
//   // Нашли середину списка
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   // Переворачивае вторую часть списка
//   let second = slow.next;
//   slow.next = null;
//   let prev = null;
//   while (second) {
//     let tmp = second.next;
//     second.next = prev;
//     prev = second;
//     second = tmp;
//   }
//   // Соединили 2 части
//   let firstHalf = head,
//     secondHalf = prev;
//   while (secondHalf) {
//     let tmp1 = firstHalf.next;
//     let tmp2 = secondHalf.next;
//     firstHalf.next = secondHalf;
//     secondHalf.next = tmp1;
//     firstHalf = tmp1;
//     secondHalf = tmp2;
//   }
// };
