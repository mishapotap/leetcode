// https://leetcode.com/problems/minimum-index-sum-of-two-lists/description
let list1_1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  list2_1 = [
    "Piatti",
    "The Grill at Torrey Pines",
    "Hungry Hunter Steakhouse",
    "Shogun",
  ],
  list1_2 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  list2_2 = ["KFC", "Shogun", "Burger King"],
  list1_3 = ["happy", "sad", "good"],
  list2_3 = ["sad", "happy", "good"];
// Output: ["Shogun"] / ["Shogun"] / ["sad","happy"]
var findRestaurant = function (list1, list2) {
  // Решениче без доп памяти (Map)
  // let res = [];
  // let currentMin = Infinity;
  // for (let i = 0; i < list1.length; i++) {
  //   const word = list1[i];
  //   const index = list2.indexOf(word); // list2 index
  //   if (index !== -1) {
  //     const sumOfIndex = i + index;
  //     if (sumOfIndex < currentMin) {
  //       res = [word];
  //       currentMin = sumOfIndex;
  //     } else if (sumOfIndex === currentMin) {
  //       res.push(word);
  //     }
  //   }
  // }
  // return res;
  // Решение через доп память (Map)
  let list1Map = new Map();
  let res = [];
  let currentMin = Infinity;
  for (let i = 0; i < list1.length; i++) {
    list1Map.set(list1[i], i);
  }
  for (let i = 0; i < list2.length; i++) {
    const word = list2[i];
    if (list1Map.has(word)) {
      const sumOfIndex = i + list1Map.get(list2[i]);
      if (sumOfIndex < currentMin) {
        res = [word];
        currentMin = sumOfIndex;
      } else if (sumOfIndex === currentMin) {
        res.push(word);
      }
    }
  }
  return res;
};
console.log(findRestaurant(list1_3, list2_3));
