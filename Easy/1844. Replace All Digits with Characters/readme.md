# 1844. Replace All Digits with Characters

You are given a **0-indexed** string `s` that has lowercase English letters in its **even** indices and digits in its **odd** indices.

There is a function `shift(c, x)`, where `c` is a character and `x` is a digit, that returns the `x^th` character after `c`.

* For example, `shift('a', 5) = 'f'` and `shift('x', 0) = 'x'`.

For every **odd** index `i`, you want to replace the digit `s[i]` with `shift(s[i-1], s[i])`.

Return `s` after replacing all digits. It is **guaranteed** that shift(s[i-1], s[i]) will never exceed `'z'`.

 

**Example 1:**
```
Input: s = "a1c1e1"
Output: "abcdef"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('c',1) = 'd'
- s[5] -> shift('e',1) = 'f'
```

**Example 2:**
```
Input: s = "a1b2c3d4e"
Output: "abbdcfdhe"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('b',2) = 'd'
- s[5] -> shift('c',3) = 'f'
- s[7] -> shift('d',4) = 'h'
```

**Constraints:**
* `1 <= s.length <= 100`
* `s` consists only of lowercase English letters and digits.
* `shift(s[i-1], s[i]) <= 'z'` for all **odd** indices `i`.



***
# Note
又是一題跟別人討論時的插隊題。

在討論的時候評估問題，我誇下海口說這道題不用寫 `if`，結果實際做下去才發現原來有不帶數字的可能性...  
照常理來說確實需要 `if`，可是水都潑出去了，當然要好好試試看囉XDDD  
於是有了下面那個噁爛的解法。  
（其實也只是把 `if` 藏起來而已，本質是一樣的）

[solution1.js](solution1.js)
* 時間複雜度：`O(n)` （實際上是一半，只是好像沒看過 `O(n/2)` 這種表示法，畢竟是常數）
* 提交時成績：`63ms (85%), 42MB (77%)`
* 提交日期：`2022-04-04`


另外附上一個正常版的（該用 `if` 就乖乖用，別搞那些有的沒的）

[solution2.js](solution2.js)
* 時間複雜度：`O(n)` （實際上是一半）
* 提交時成績：`49ms (99%), 42.2MB (63%)` （這屬於正常浮動值，跟演算法無關）
* 提交日期：`2022-04-04`