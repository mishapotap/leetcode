// https://leetcode.com/problems/range-sum-of-bst/description/
// let root = [10, 5, 15, 3, 7, null, 18],
//   low = 7,
//   high = 15;
// // Output: 32
//
// var rangeSumBST = function (root, low, high) {
//   // Второе решение через рекурсию
//   if (!root) return 0;
//   const currentValue = root.val >= low && root.val <= high ? root.val : 0;
//   const leftTree = rangeSumBST(root.left, low, high);
//   const rightTree = rangeSumBST(root.right, low, high);
//   return currentValue + leftTree + rightTree;
//   // Второе решение через стек
//   if (!root) return 0;
//   let sum = 0;
//   const stack = [root];
//   while (stack.length) {
//     const node = stack.pop();
//     if (node.val >= low && node.val <= high) sum += node.val;
//     if (node.left) {
//       stack.push(node.left);
//     }
//     if (node.right) {
//       stack.push(node.right);
//     }
//   }
//   return sum;
// };
