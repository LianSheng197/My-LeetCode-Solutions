# 74. Search a 2D Matrix

Write an efficient algorithm that searches for a value `target` in an `m x n` integer matrix `matrix`. This matrix has the following properties:

* Integers in each row are sorted from left to right.
* The first integer of each row is greater than the last integer of the previous row.

**Example 1:**
```
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
```

**Example 2:**
```
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
```

**Constraints:**
* `m == matrix.length`
* `n == matrix[i].length`
* `1 <= m, n <= 100`
* `-104 <= matrix[i][j], target <= 104`



***
### Note

不久前做了[第 81 題](../81.%20Search%20in%20Rotated%20Sorted%20Array%20II/readme.md)，雖然那題尚未收尾，但也大致看過 binary search。  
這題要求寫一個高效率的搜尋演算法，直覺就是要用 binary search，這就來試試。

[solution1.js](solution1.js)
* 時間複雜度：`O(logn)`
* 提交時成績：`83ms (48%), 41.9MB (84%)` （相當不錯的成績）
* 提交日期：`2022-03-30`


實際做過之後覺得其實 binary search 並沒有事前想得這麼難懂。  
大概是它要求傳入陣列必須先經過排序，所以實務上感覺不是很常用到...？  
（至少我的經驗多半是亂序陣列，且資訊量也不大，所以即使用最暴力的方式也沒有特別感覺）