// https://leetcode.com/problems/encode-and-decode-tinyurl/
// let longUrl = "https://leetcode.com/problems/design-tinyurl",
//   shortUrl = "http://tinyurl.com/1";
// Первое решение с одним Map() и в encode мы не проверяем есть ли уже этот URL
// let encodeMap = new Map();
// let baseUrl = "http://tinyurl.com/";
// var encode = function (longUrl) {
//   let key = (encodeMap.size + 1).toString(); // Можно также Date.now().toString();
//   let shortUrl = baseUrl + key;
//   encodeMap.set(key, longUrl);
//   return shortUrl;
// };
// var decode = function (shortUrl) {
//   let key = shortUrl.split(baseUrl)[1]; // [ '', '1' ]
//   return encodeMap.get(key);
// };
// Второе решение с двумя Map() и в encode мы проверяем есть ли уже этот URL
// let encodeMap = new Map();
// let decodeMap = new Map();
// let baseUrl = "http://tinyurl.com/";
// var encode = function (longUrl) {
//   if (!encodeMap.has(longUrl)) {
//     let key = (encodeMap.size + 1).toString(); // Можно также Date.now().toString();
//     let shortUrl = baseUrl + key;
//     encodeMap.set(longUrl, shortUrl);
//     decodeMap.set(shortUrl, longUrl);
//   }
//   return encodeMap.get(longUrl);
// };
// var decode = function (shortUrl) {
//   return decodeMap.get(shortUrl);
// };
// console.log(encode(longUrl));
// console.log(decode(shortUrl));
