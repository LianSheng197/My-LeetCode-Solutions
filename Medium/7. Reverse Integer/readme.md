# 7. Reverse Integer

Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-2^31, 2^31 - 1]`, then return `0`.

**Assume the environment does not allow you to store 64-bit integers (signed or unsigned).**

**Example 1:**
```
Input: x = 123
Output: 321
```

**Example 2:**
```
Input: x = -123
Output: -321
```

**Example 3:**
```
Input: x = 120
Output: 21
```

**Constraints:**
* `-231 <= x <= 231 - 1`

***
### Note
「這道題是 Medium 難度！？別開玩笑了」

好吧，也許這種題目用 C 不好寫吧？我不確定，反正我是寫 JavaScript，基於可讀性這個目標，非必要才不會用什麼位元運算搞未來的自己呢。

[solution1.js](solution1.js)
* 時間複雜度：`O(n)` （假如只看數字位數的話）
* 提交時消耗：`72ms, 44MB`

意料中的簡單。也難怪這道題會拿到 `6890 讚 / 9482 噓` 了。未來應該也會保持類似的比例。  
不過講真的，如果今天這道題是設計給 128 位元或是更大的數值，要求要用大數運算的方式去解的話，那感覺整個難度就起來了。

還是一樣，這題用 js 寫沒有任何難度。  
假如這是 Medium，那麼[第 5 題](../5.%20Longest%20Palindromic%20Substring/readme.md)應該要被分類到 Hard 才合理。

