// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// let root = [3, 9, 20, null, null, 15, 7],
//   root2 = [1, null, 2];
// // Output: 3 / 2
// var maxDepth = function (root) {
//   if (root === null) return 0;
//   const leftDepth = maxDepth(root.left);
//   const rightDepth = maxDepth(root.right);
//   return Math.max(leftDepth, rightDepth) + 1;
// };
// console.log(maxDepth(root));
