// https://leetcode.com/problems/middle-of-the-linked-list/description/
// let head = [1, 2, 3, 4, 5];
// // Output: [3,4,5]
// var middleNode = function (head) {
//   let fast = head,
//     slow = head;
//   // // Первое решение
//   // while (fast !== null) {
//   //   fast = fast.next.next;
//   //   slow = slow.next;
//   // }
//   // Второе решение
//   while (fast !== null) {
//     fast = fast.next;
//     if (fast === null) {
//       break;
//     } else {
//       fast = fast.next;
//     }
//     slow = slow.next;
//   }
//   return slow;
// };
// console.log(middleNode(head));
