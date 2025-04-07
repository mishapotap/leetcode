// https://leetcode.com/problems/relative-ranks/description
let score = [5, 4, 3, 2, 1],
  score2 = [10, 3, 8, 9, 4];
// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"] / ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
var findRelativeRanks = function (score) {
  // Решение через сортировку N*logN
  const sortedScore = [...score].sort((a, b) => b - a); // [10, 9 ,8, 4, 3]
  const placeToMedalMap = {
    0: "Gold Medal",
    1: "Silver Medal",
    2: "Bronze Medal",
  };
  let scoreToIndexMap = new Map(); // {10: 0, 9: 1, 8: 2, 4: 3, 3: 4}
  for (let i = 0; i < sortedScore.length; i++) {
    scoreToIndexMap.set(sortedScore[i], i);
  }

  for (let i = 0; i < score.length; i++) {
    const place = scoreToIndexMap.get(score[i]);
    score[i] = placeToMedalMap[place] ?? "" + (place + 1);
  }
  return score;
};
console.log(findRelativeRanks(score2));
