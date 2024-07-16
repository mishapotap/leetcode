// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// let head = [1, 1, 2, 3, 3];
// // Output: [1,2,3]
// var deleteDuplicates = function (head) {
//   let curr = head;
//   while (curr) {
//     if (curr.next !== null && curr.val === curr.next.val) {
//       curr.next = curr.next.next;
//     } else {
//       curr = curr.next;
//     }
//   }
//   return head;
// };
