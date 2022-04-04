# 13. Roman to Integer

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, `2` is written as `II` in Roman numeral, just two one's added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

`I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
`X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
`C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

 

**Example 1:**
```
Input: s = "III"
Output: 3
Explanation: III = 3.
```

**Example 2:**
```
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```

**Example 3:**
```
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

**Constraints:**
* `1 <= s.length <= 15`
* `s` contains only the characters (`'I'`, `'V'`, `'X'`, `'L'`, `'C'`, `'D'`, `'M'`).
* It is **guaranteed** that s is a valid roman numeral in the range `[1, 3999]`.


***
[第 12 題](../../Medium/12.%20Integer%20to%20Roman/readme.md)的顛倒，沒什麼特別的。  
因爲前面有經驗了，所以這次直接用雙陣列處理，確保效率。

[solution1.js](solution1.js)
* 時間複雜度：`O(n)` （雖然有兩層迴圈，不過裏面的 while 最多不超過 3 次）
* 空間複雜度：`O(1)`
* 提交時成績：`159ms (74%), 47.1MB (66%)`
* 提交日期：`2022-04-05`


沒什麼特別的想法，基本上就抄第 12 題的模式而已。
