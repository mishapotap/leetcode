// https://leetcode.com/problems/reverse-linked-list/description/
// let head = [1, 2, 3, 4, 5];
// // Output: [5,4,3,2,1]
// var reverseList = function (head) {
//   let prev = null;
//   let curr = head;
//   while (curr) {
//     // save next
//     let next = curr.next;
//     // reverse
//     curr.next = prev;
//     // advance prev and curr
//     prev = curr;
//     curr = next;
//   }
//   return prev;
// };
// console.log(reverseList(head));
