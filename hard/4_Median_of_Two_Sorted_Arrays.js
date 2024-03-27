// https://leetcode.com/problems/median-of-two-sorted-arrays/description/
// let nums1 = [1, 3],
//   nums2 = [2],
//   nums12 = [1, 2],
//   nums22 = [3, 4],
//   nums13 = [3, 4],
//   nums23 = [];
// // Output: 2.00000 / 2.50000 / 3.50000
// var findMedianSortedArrays = function (nums1, nums2) {
//   let array = new Array(nums1.length + nums2.length);
//   let p1 = 0,
//     p2 = 0,
//     insertIdx = 0;
//   // Вставляем в массив элементы пока не дойдем до конца одного из массивов
//   while (p1 < nums1.length && p2 < nums2.length) {
//     if (nums1[p1] < nums2[p2]) array[insertIdx++] = nums1[p1++];
//     else array[insertIdx++] = nums2[p2++];
//   }
//   // Вставляем в массив оставшиеся элементы одного из массива (1 или 2)
//   while (p1 < nums1.length) array[insertIdx++] = nums1[p1++];
//   while (p2 < nums2.length) array[insertIdx++] = nums2[p2++];
//   // Находим середину и возвращаем её
//   let mid = Math.floor(array.length / 2);
//   if (array.length % 2 === 0) {
//     return (array[mid - 1] + array[mid]) / 2;
//   } else {
//     return array[mid];
//   }
// };
// console.log(findMedianSortedArrays(nums13, nums23));
