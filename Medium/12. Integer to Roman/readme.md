# 12. Integer to Roman

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
Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.
```

**Example 2:**
```
Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
```

**Example 3:**
```
Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

**Constraints:**
* `1 <= num <= 3999`

***
這題對我來說沒什麼特別的。以前寫過類似的東西大概知道怎麼寫。  
不過過去我一直以爲只能表達到 3888，看來我以前讀的書可能寫錯規則或是比較嚴格之類的？我不確定。  
不過幸好這不影響解題。

[solution1.js](solution1.js)
* 時間複雜度：`O(n)` （雖然有兩層迴圈，不過裏面的 while 最多不超過 3 次）
* 空間複雜度：`O(1)`
* 提交時成績：`323ms (5%), 49.9MB (20%)` （這什麼爛成績XDDD）
* 提交日期：`2022-04-05`


不知道能不能改善一下， `5%, 20%` 真的太難看了啦。  

[solution2.js](solution2.js)
* 時間複雜度：`O(n)` （雖然有兩層迴圈，不過裏面的 while 最多不超過 3 次）
* 空間複雜度：`O(1)`
* 提交時成績：`157ms (72%), 46.8MB (91%)` （這什麼爛成績XDDD）
* 提交日期：`2022-04-05`


果然要用兩個陣列而非字典。
