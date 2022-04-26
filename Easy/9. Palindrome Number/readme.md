# 9. Palindrome Number

Given an integer `x`, return `true` if `x` is palindrome integer.

An integer is a **palindrome** when it reads the same backward as forward.

For example, `121` is a palindrome while `123` is not.
 

**Example 1:**
```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

**Example 2:**
```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

**Example 3:**
```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

**Constraints:**
* `-2^31 <= x <= 2^31 - 1`
 

**Follow up**: Could you solve it without converting the integer to a string?


***
### Note

這一題最直觀的做法就是轉成字串來做，不過呢，轉字串的做法在[第 5 題](../../Medium/5.%20Longest%20Palindromic%20Substring/readme.md)就做過了，所以這裡直接跳到最底下的 **Follow Up**：嘗試解題但不轉成字串。

[solution1.js](solution1.js)
* 時間複雜度：`O(n)` （根據數字位數）
* 提交時成績：`270ms, 50.9MB`


估計是前面先做過類似的題目，這題解起來沒什麼壓力。雖然事前只是一個大方向的想法，但邊寫邊想，過程中似乎沒什麼卡頓。  
這就是訓練的成效嗎？才怪，不太可能這麼快就體現，但是感覺真的很棒 :D

目前寫到這裡已經 8 道題了，我現在唯一的想法就是要趕快搞清楚到底時間複雜度要怎麼算，不然每次計算時都懷疑自己的算法是不是錯的 orz


> [solution1.rs](solution1.rs)
> * 時間複雜度：`O(n)`
> * 空間複雜度：`O(1)`
> * 提交成績：`11ms (65%), 2.7MB (5%)` （這記憶體用量也太悽慘）
> * 提交日期：`2022-04-27`


在瀏覽其他人的做法時看到一個超酷的做法！！  
它的過程非常簡單，且易懂。  

[solution2.rs](solution2.rs)
> * 時間複雜度：`O(n)`
> * 空間複雜度：`O(1)`
> * 提交成績：`16ms (35%), 2MB (95%)` 
> * 提交日期：`2022-04-27`

