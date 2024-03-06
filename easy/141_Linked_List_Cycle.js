// https://leetcode.com/problems/linked-list-cycle/
// let head = [3, 2, 0, -4],
//   head2 = [1, 2];
// // Output: true
// var hasCycle = function (head) {
//   // Решениче через two pointers
//   let slow = head;
//   let fast = head;
//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) return true;
//   }
//   return false;
//   // Решение через hashMap
//   // let visited = new Set();
//   // let current = head;
//   // while (current !== null) {
//   //   if (visited.has(current)) return true;
//   //   visited.add(current);
//   //   current = current.next;
//   // }
//   // return false;
// };
// console.log(hasCycle(head));
