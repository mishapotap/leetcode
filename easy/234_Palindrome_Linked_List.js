// https://leetcode.com/problems/palindrome-linked-list/description/
// let head = [1, 2, 2, 1],
//   head2 = [1, 2],
//   head3 = [1, 2, 3, 2, 1];
// // Output: true / false / true
// var isPalindrome = function (head) {
//   // Решение O(n) по памяти
//   let arr = [];
//   while (head) {
//     arr.push(head.val);
//     head = head.next;
//   }
//   let mid = Math.floor(arr.length / 2);
//   for (let i = 0; i < mid; i++) {
//     if (arr[i] !== arr[arr.length - 1 - i]) return false;
//   }
//   return true;
// Решение O(1) по памяти
//   let fast = head,
//     slow = head;
//   // Нашли середину списка
//   while (fast && fast.next) {
//     fast = fast.next.next;
//     slow = slow.next;
//   }
//   // Перевернули вторую половину
//   let prev = null;
//   while (slow) {
//     let tmp = slow.next;
//     slow.next = prev;
//     prev = slow;
//     slow = tmp;
//   }
//   // Проверяем палиндром или нет
//   let left = head,
//     right = prev;
//   while (right) {
//     if (right.val !== left.val) return false;
//     right = right.next;
//     left = left.next;
//   }
//   return true;
// };
