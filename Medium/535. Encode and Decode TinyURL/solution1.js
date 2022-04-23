const map = [];

/**
 * @param {string} longUrl
 * @return {string}
 */
const encode = function (longUrl) {
    return "" + (map.push(longUrl) - 1);
};

/**
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function (shortUrl) {
    return map[shortUrl];
};


// -------------
console.log(decode(encode("https://leetcode.com/problems/design-tinyurl")));