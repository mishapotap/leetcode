// https://leetcode.com/problems/keyboard-row/description
let words = ["Hello", "Alaska", "Dad", "Peace"],
  words2 = ["adsdf", "sfd"];
// Output: ["Alaska","Dad"] \ ["adsdf","sfd"];

var findWords = function (words) {
  // Решение 1 Через every
  // const row1 = new Set("qwertyuiop");
  // const row2 = new Set("asdfghjkl");
  // const row3 = new Set("zxcvbnm");
  // return words.filter((word) => {
  //   const wordArray = word.toLowerCase().split("");
  //   return (
  //     wordArray.every((char) => row1.has(char)) ||
  //     wordArray.every((char) => row2.has(char)) ||
  //     wordArray.every((char) => row3.has(char))
  //   );
  // });

  // Решение 2 Через кастомную функцию
  const row1 = new Set("qwertyuiop");
  const row2 = new Set("asdfghjkl");
  const row3 = new Set("zxcvbnm");

  const res = [];

  for (const word of words) {
    const lowerCaseWord = word.toLowerCase();
    if (
      canBeTyped(lowerCaseWord, row1) ||
      canBeTyped(lowerCaseWord, row2) ||
      canBeTyped(lowerCaseWord, row3)
    ) {
      res.push(word);
    }
  }

  return res;

  function canBeTyped(word, row) {
    for (const char of word) {
      if (!row.has(char)) return false;
    }
    return true;
  }
};
console.log(findWords(words));
