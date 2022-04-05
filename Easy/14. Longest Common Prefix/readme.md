# 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 
**Example 1:**
```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

**Example 2:**
```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

**Constraints:**
* `1 <= strs.length <= 200`
* `0 <= strs[i].length <= 200`
* `strs[i]` consists of only lower-case English letters.



***
剛看完題目沒什麼想法，先暴力寫一次。  

[solution1.js](solution1.js)
* 時間複雜度：`O(n^2)` （不確定是不是 n^2，因爲一個是陣列長度，一個是字串長度）
* 空間複雜度：`O(1)`
* 提交時成績：`72ms (78%), 42.7MB (57%)`
* 提交日期：`2022-04-05`


看提交成績感覺應該是正解吧？  
不確定有沒有更高效的解法，要看看別人的討論。

好吧，看了之後就發現可以先排序，然後只比較兩個字串。  
事前我有想過，但是當時誤以爲多排序會比較慢，不過仔細思考後應該可以把複雜度壓到 `O(nlogn)`

[solution2.js](solution2.js)
* 時間複雜度：`O(nlogn)` （Array.prototype.sort）
* 空間複雜度：`O(1)`
* 提交時成績：`69ms (81%), 42.3MB (83%)`
* 提交日期：`2022-04-05`


