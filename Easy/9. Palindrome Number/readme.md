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

### JavaScript

這一題最直觀的做法就是轉成字串來做，不過呢，轉字串的做法在[第 5 題](../../Medium/5.%20Longest%20Palindromic%20Substring/readme.md)就做過了，所以這裡直接跳到最底下的 **Follow Up**：嘗試解題但不轉成字串。

[solution1.js](solution1.js)
* 時間複雜度：`O(n)` （根據數字位數）
* 提交時成績：`270ms, 50.9MB`


順便用 js 改寫 rust/s2

> [solution2.js](solution2.js)
> * 時間複雜度：`O(n)`
> * 空間複雜度：`O(1)`
> * 提交成績：`233ms (58%), 50.5MB (86%)` 
> * 提交日期：`2022-04-27`


### Rust
因爲不轉成字串去做的話會在特殊測資下失真（如 799999999.0 變成 800000000.0）

> [solution1.rs](solution1.rs)
> * 時間複雜度：`O(n)`
> * 空間複雜度：`O(1)`
> * 提交成績：`11ms (65%), 2.7MB (5%)` （這記憶體用量也太悽慘）
> * 提交日期：`2022-04-27`


在瀏覽其他人的做法時看到一個超酷的做法！！  
它的過程非常簡單，且易懂。  

> [solution2.rs](solution2.rs)
> * 時間複雜度：`O(n)`
> * 空間複雜度：`O(1)`
> * 提交成績：`16ms (35%), 2MB (95%)` 
> * 提交日期：`2022-04-27`

