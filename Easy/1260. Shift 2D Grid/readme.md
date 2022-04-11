# 1260. Shift 2D Grid

Given a 2D `grid` of size `m x n` and an integer `k`. You need to shift the `grid` `k` times.

In one shift operation:

* Element at `grid[i][j]` moves to `grid[i][j + 1]`.
* Element at `grid[i][n - 1]` moves to `grid[i + 1][0]`.
* Element at `grid[m - 1][n - 1]` moves to `grid[0][0]`.

Return the 2D grid after applying shift operation `k` times.

 

**Example 1:**
![](assets/e1.png)  
```
Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
Output: [[9,1,2],[3,4,5],[6,7,8]]
```

**Example 2:**
![](assets/e2.png)  
```
Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
```

**Example 3:**
```
Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
Output: [[1,2,3],[4,5,6],[7,8,9]]
```

**Constraints:**
* `m == grid.length`
* `n == grid[i].length`
* `1 <= m <= 50`
* `1 <= n <= 50`
* `-1000 <= grid[i][j] <= 1000`
* `0 <= k <= 100`


***
嗯... 之前寫過類似的東西，而且還是 Medium 的題目。

[solution1.js](solution1.js)
* 時間複雜度：`O(n)` （n 爲二維陣列的元素數量）
* 空間複雜度：`O(n)`
* 提交成績：`138ms (41%), 49.4MB (6%)`
* 提交日期：`2022-04-12`


成績不甚理想。  
不過其實早在寫的時候就有預料到了。  
畢竟有很多地方其實可以直接代入語句的，我卻選擇另外設變數、包成物件等。  
這樣執行肯定比較耗時，而記憶體用量就更不用說了，哈哈
