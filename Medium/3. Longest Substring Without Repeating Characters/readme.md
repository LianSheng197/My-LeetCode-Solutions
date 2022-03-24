# 3. Longest Substring Without Repeating Characters

Given a string `s`, find the length of the **longest substring** without repeating characters.

**Example 1:**
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**
```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**
```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

**Constraints:**
* `0 <= s.length <= 5 * 10^4`
* `s` consists of English letters, digits, symbols and spaces.

***
### Note
這題沒什麼特殊想法，題目也沒什麼提示，先嘗試了再說。

[solution1.js](solution1.js)
* 時間複雜度：`O(n)`
* 提交時消耗：`149ms, 45.8 MB`