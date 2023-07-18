// https://leetcode.com/problems/decode-the-message/
// "abcdefghijklmnopqrstuvwxyz"
// let key = "the quick brown fox jumps over the lazy dog",
//   message = "vkbs bs t suepuv";
// // Output: "this is a secret"
// var decodeMessage = function (key, message) {
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let map = new Map();
//   let result = "";
//   for (let i = 0; i < key.length; i++) {
//     if (key[i] === " ") continue;
//     if (!map.has(key[i])) {
//       map.set(key[i], alphabet[map.size]);
//     }
//   }
//   for (let i = 0; i < message.length; i++) {
//     result += map.get(message[i]) || " ";
//   }
//   return result;
// };
// console.log(decodeMessage(key, message));
