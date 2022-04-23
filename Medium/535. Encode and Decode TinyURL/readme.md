# 535. Encode and Decode TinyURL

> Note: This is a companion problem to the System Design problem: Design TinyURL.

TinyURL is a URL shortening service where you enter a URL such as `https://leetcode.com/problems/design-tinyurl` and it returns a short URL such as `http://tinyurl.com/4e9iAk`. Design a class to encode a URL and decode a tiny URL.

There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

Implement the `Solution` class:
* `Solution()` Initializes the object of the system.
* `String encode(String longUrl)` Returns a tiny URL for the given `longUrl`.
* `String decode(String shortUrl)` Returns the original long URL for the given `shortUrl`. It is guaranteed that the given `shortUrl` was encoded by the same object.
 

**Example 1:**
```
Input: url = "https://leetcode.com/problems/design-tinyurl"
Output: "https://leetcode.com/problems/design-tinyurl"

Explanation:
Solution obj = new Solution();
string tiny = obj.encode(url); // returns the encoded tiny url.
string ans = obj.decode(tiny); // returns the original url after deconding it.
```

**Constraints:**
* `1 <= url.length <= 10^4`
* `url` is guranteed to be a valid URL.


****
這題可以吐槽的點太多了。  
首先，難度明顯不是 Medium，因爲這是一個 hashmap 就可以解決的，除非題目限制不要這麼多。  
再者，題目說不管我們是怎麽實現的，總之要能逆推即可... 好吧，這種高自由度的題目也不錯，但太過自由就會變成解體可能兩三行就結束了。  
最後，題目描述裡提到要用物件實現，但是 JavaScript 的範例卻直接用兩個 function... 很尷尬耶。

怪不得噓這題的人數是讚的兩倍。

[solution1.js](solution1.js)
* 時間複雜度：`O(n)` （n 是指總共操作次數）
* 空間複雜度：`O(n)` （n 是指總共操作次數）
* 提交成績：`77ms (75%), 44.1MB (41%)`
* 提交日期：`2022-04-23`
