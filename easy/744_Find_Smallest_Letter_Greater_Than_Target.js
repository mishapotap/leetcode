// https://leetcode.com/problems/find-smallest-letter-greater-than-target/
// let letters = ["c", "f", "j"],
//   target = "a",
//   letters2 = ["c", "f", "j"],
//   target2 = "c",
//   letters3 = ["x", "x", "y", "y"],
//   target3 = "z",
//   letters4 = ["c", "f", "j"],
//   target4 = "d",
//   letters5 = ["c", "f", "j"],
//   target5 = "g";
// // Output: "c" / "f" / "x" / "f" / "j"
// var nextGreatestLetter = function (letters, target) {
//   let left = 0;
//   let right = letters.length - 1;
//   let result = letters[0];
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (letters[mid] <= target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//       result = letters[mid];
//     }
//   }
//   return result;
// };
// console.log(nextGreatestLetter(letters, target));
