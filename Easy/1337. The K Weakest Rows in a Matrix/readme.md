# 1337. The K Weakest Rows in a Matrix

You are given an `m x n` binary matrix `mat` of `1`'s (representing soldiers) and `0`'s (representing civilians). The soldiers are positioned **in front** of the civilians. That is, all the 1's will appear to the **left** of all the 0's in each row.

A row `i` is **weaker** than a row `j` if one of the following is true:

The number of soldiers in row `i` is less than the number of soldiers in row `j`.
Both rows have the same number of soldiers and `i < j`.
Return the indices of the `k` **weakest** rows in the matrix ordered from weakest to strongest.

**Example 1:**
```
Input: mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
Output: [2,0,3]
Explanation: 
The number of soldiers in each row is: 
- Row 0: 2 
- Row 1: 4 
- Row 2: 1 
- Row 3: 2 
- Row 4: 5 
The rows ordered from weakest to strongest are [2,0,3,1,4].
```

**Example 2:**
```
Input: mat = 
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]], 
k = 2
Output: [0,2]
Explanation: 
The number of soldiers in each row is: 
- Row 0: 1 
- Row 1: 4 
- Row 2: 1 
- Row 3: 1 
The rows ordered from weakest to strongest are [0,2,3,1].
```

**Constraints:**
* `m == mat.length`
* `n == mat[i].length`
* `2 <= n, m <= 100`
* `1 <= k <= m`
* `matrix[i][j]` is either 0 or 1.



*** 
### Note
這一題是每日隨機題，看到是 Easy 所以插隊一下 :D

[solution1.js](solution1.js)
* 時間複雜度：`O(nlogn)` （裡面使用到 `Array.prototype.sort()`，根據資料(*1)顯示，平均複雜度爲 `O(nlogn)`）
* 提交時成績：`102ms, 44.5MB` （中規中矩的成績）
* 提交日期：`2022-03-28`


**備註 (\*1)**  
根據 V8 引擎實現 `Array.prototype.sort()` 的 source code：
```js
function InnerArraySort(array, length, comparefn) {
  // In-place QuickSort algorithm.
  // For short (length <= 10) arrays, insertion sort is used for efficiency.
  if (!IS_CALLABLE(comparefn)) {
    comparefn = function (x, y) {
      if (x === y) return 0;
      if (%_IsSmi(x) && %_IsSmi(y)) {
        return %SmiLexicographicCompare(x, y);
      }
      x = TO_STRING(x);
      y = TO_STRING(y);
      if (x == y) return 0;
      else return x < y ? -1 : 1;
    };
}
```

上述程式碼取自於[這篇文章](https://medium.com/@leokao0726/%E6%B7%BA%E8%AB%87-js-sort-%E5%88%B0%E8%83%8C%E5%BE%8C%E6%8E%92%E5%BA%8F%E6%96%B9%E6%B3%95-1035f5b8cde8)。  
~~我嘗試去找來源位置，但是找不到，姑且先相信了。~~  
找到了，在 [v8/v8/src/js/array.js](https://github.com/v8/v8/blob/cd81dd6d740ff82a1abbc68615e8769bd467f91e/src/js/array.js#L910) 這個檔案。這個版本裡甚至可以看到 short array 的判斷從 `(length <= 10)` 改成 `(length <= 22)`，看來是個與時俱進的數值，未來應該也會慢慢變多。  
再說每個引擎的解釋方法可能略有不同 -- 爲此我還去翻了文件，文件並指定一定要用哪種排序法，看來是讓不同引擎各憑本事。  
(Ref: [23.1.3.28 Array.prototype.sort](https://tc39.es/ecma262/#sec-array.prototype.sort))  


總之，因爲這道題是 Easy 且不是演算法題目，所以這次我選擇偷懶，站在巨人的肩膀上讓這道題就絲毫沒有難度了XD