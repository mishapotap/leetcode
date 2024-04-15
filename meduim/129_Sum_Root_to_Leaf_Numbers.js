// https://leetcode.com/problems/sum-root-to-leaf-numbers/
// let root = [4, 9, 0, 5, 1];
// // Output: 1026
// var sumNumbers = function (root) {
//   if (!root) return null;
//   let res = 0;
//   function dfs(node, num) {
//     num += node.val;
//     if (!node.left && !node.right) res += +num;
//     if (node.left) dfs(node.left, num);
//     if (node.right) dfs(node.right, num);
//   }
//   dfs(root, "");
//   return res;
// };
