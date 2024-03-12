// https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/description/
// let head = [1, 2, -3, 3, 1],
//   head2 = [1, 2, 3, -3, 4];
// // Output: [3,1] / [1,2,4]
// var removeZeroSumSublists = function (head) {
//   // Инициализируем dummy ноду
//   const dummy = new ListNode(0);
//   dummy.next = head;
//   let prefSum = 0;
//   const map = new Map();
//   map.set(prefSum, dummy);
//
//   while (head) {
//     prefSum += head.val;
//     if (map.has(prefSum)) {
//       let to_delete = map.get(prefSum).next;
//       let temp_sum = prefSum + to_delete.val;
//       while (to_delete !== head) {
//         map.delete(temp_sum);
//         to_delete = to_delete.next;
//         temp_sum += to_delete.val;
//       }
//       map.get(prefSum).next = head.next;
//     } else {
//       map.set(prefSum, head);
//     }
//     head = head.next;
//   }
//   return dummy.next;
//   // Второе решение более оптимизированное
//   // let prefixSum = 0;
//   // let sumMap = new Map();
//   // let dummy = new ListNode(0);
//   // dummy.next = head;
//   //
//   // let current = dummy;
//   //
//   // while (current) {
//   //   prefixSum += current.val;
//   //   sumMap.set(prefixSum, current);
//   //   current = current.next;
//   // }
//   //
//   // prefixSum = 0;
//   // current = dummy;
//   //
//   // while (current) {
//   //   prefixSum += current.val;
//   //   current.next = sumMap.get(prefixSum).next;
//   //   current = current.next;
//   // }
//   //
//   // return dummy.next;
// };
// console.log(removeZeroSumSublists(head));
