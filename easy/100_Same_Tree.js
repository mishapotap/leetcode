// https://leetcode.com/problems/same-tree/description/
// let p = [1, 2, 3],
//   q = [1, 2, 3],
//   p2 = [1, 2],
//   q2 = [1, null, 2];
// // Output: true / false
// var isSameTree = function (p, q) {
//   // Решение рекурсивно в глубину (DFS)
//   // Если нет обеих вершин то они идентичны
//   if (!p && !q) return true;
//   // Если одна из вершин === null то они не идентичны, тк выше мы уже проверили что они обе не null
//   if (!p || !q) return false;
//   // Просто сравниваем значения
//   if (p.val !== q.val) return false;
//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
//   // ######################################
//   // Решение через очередь в ширину (BFS)
//   // Создал очередь для обеих деревьев
//   const queue1 = [p];
//   const queue2 = [q];
//
//   while (queue1.length > 0 && queue2.length > 0) {
//     const node1 = queue1.shift();
//     const node2 = queue2.shift();
//
//     if (!node1 && !node2) continue;
//     if (!node1 || !node2) return false;
//     if (node1.val !== node2.val) return false;
//
//     // Добавляю левых и правых дочерних элементов обоих узлов в соответствующие очереди
//     queue1.push(node1.left);
//     queue1.push(node1.right);
//     queue2.push(node2.left);
//     queue2.push(node2.right);
//   }
//
//   // Если обе очереди пустые то деревья идентичны
//   return queue1.length === 0 && queue2.length === 0;
// };
