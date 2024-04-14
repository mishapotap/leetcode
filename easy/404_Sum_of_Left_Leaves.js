// https://leetcode.com/problems/sum-of-left-leaves/description/
// let root = [3, 9, 20, null, null, 15, 7];
// // Output: 24
// var sumOfLeftLeaves = function (root) {
//   let sum = 0;
//   if (!root) return sum;
//   const dfs = (node, isLeft = false) => {
//     if (!node) return;
//     if (!node.left && !node.right && isLeft) sum += node.val;
//     dfs(node.left, true);
//     dfs(node.right, false);
//   };
//   dfs(root);
//   return sum;
// };
