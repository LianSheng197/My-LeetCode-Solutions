# 1046. Last Stone Weight

You are given an array of integers `stones` where `stones[i]` is the weight of the `i^th` stone.

We are playing a game with the stones. On each turn, we choose the **heaviest two stones** and smash them together. Suppose the heaviest two stones have weights `x` and `y` with `x <= y`. The result of this smash is:

If `x == y`, both stones are destroyed, and
If `x != y`, the stone of weight `x` is destroyed, and the stone of weight `y` has new weight `y - x`.
At the end of the game, there is **at most one** stone left.

Return the smallest possible weight of the left stone. If there are no stones left, return `0`.

 

**Example 1:**
```
Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
```

**Example 2:**
```
Input: stones = [1]
Output: 1
```

**Constraints:**
* `1 <= stones.length <= 30`
* `1 <= stones[i] <= 1000`


***
看起來是個很簡單的題目。  
不過暫時沒有 `O(n)` 的想法...  
邊寫邊想吧。

[solution1.js](solution1.js)
* 時間複雜度：`O(n^2logn)` (不確定是不是，但排序再遞迴感覺就是這樣)
* 空間複雜度：`O(n)`
* 提交時成績：`60ms (93%), 44.4MB (14%)` （說實在的，這效率比預期的還好，也許時間複雜度那邊是我想太多了？）
* 提交日期：`2022-04-07`

和別人討論後才發現我感覺奇怪的地方在哪裏。  
別人直接用 max() 取最大值，我怎麽沒想到？還傻傻地先排序。  
然後遞迴也是不需要的，其實用一般迴圈就能勝任，而且也不會很難懂。  

講真的，這題的測資鑑別度太低了。  
要是測資大一點，我想我的 S1 肯定是吃 TLE 的。

[solution2.js](solution2.js)
* 時間複雜度：`O(n^2)` 
* 空間複雜度：`O(1)`
* 提交時成績：`64ms (88%), 42.2MB (85%)`
* 提交日期：`2022-04-07`


大概看得出有改善。  
雖然知道 LeetCode 的提交成績有挺誇張的浮動值，不過只要多送幾次看看落點大概在哪就心裏有數了。  
大概是 Easy 吧？測資才沒有刁鑽。不過寫起來也讓人感覺挺糟的就是了。  
（其他題目都在拼 `O(n)`、`O(logn)`，這題直接 `O(n^2)`...）

