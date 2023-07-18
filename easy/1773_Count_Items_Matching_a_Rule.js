// https://leetcode.com/problems/count-items-matching-a-rule/
// let items = [
//     ["phone", "blue", "pixel"],
//     ["computer", "silver", "phone"],
//     ["phone", "gold", "iphone"],
//   ],
//   ruleKey = "type",
//   ruleValue = "phone";
// var countMatches = function (items, ruleKey, ruleValue) {
//   let result = 0;
//   let indexes = {
//     type: 0,
//     color: 1,
//     name: 2,
//   };
//   for (let item of items) {
//     if (item[indexes[ruleKey]] === ruleValue) result += 1;
//   }
//   return result;
// };
// console.log(countMatches(items, ruleKey, ruleValue));
