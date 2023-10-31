// https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/
// let word = "abc",
//   word2 = "bza",
//   word3 = "zjpc";
// // Output: 5 / 7 / 34
// var minTimeToType = function (word) {
//   let res = 0;
// 	let prev = "a";
// 	for (const letter of word) {
// 		const diff = Math.abs(prev.charCodeAt(0) - letter.charCodeAt(0));
// 		if (diff > 13) {
// 			res += 26 - diff + 1;
// 		} else {
// 			res += diff + 1;
// 		}
// 		prev = letter;
// 	}
// 	return res;
// };
// console.log(minTimeToType(word));
