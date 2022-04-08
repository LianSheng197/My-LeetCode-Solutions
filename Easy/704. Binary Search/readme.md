# 704. Binary Search

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

 

**Example 1:**
```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
```

**Example 2:**
```
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
```

**Constraints:**
* `1 <= nums.length <= 10^4`
* `-10^4 < nums[i], target < 10^4`
* All the integers in `nums` are unique.
* `nums` is sorted in ascending order.


***
最基本的二元搜尋法。  
由於之前已經在其他題目做過幾次了，我想這應該是驗證我是否真的記住它的最佳時機了。  
（如果寫到一半還會覺得卡就表示過去以爲學會了其實都是假象）

[solution1.js](solution1.js)
* 時間複雜度：`O(logn)`
* 空間複雜度：`O(logn)`
* 提交成績：`60ms (97%), 45.3MB (40%)`
* 提交日期：`2022-04-09`


結果還真的有點卡，卡在搞不清楚每次遞迴傳入的端點是什麼XDD  
問題不大，就是沒能一次到位而已。  
下次再遇到類似狀況的話，相信直接把紙筆拿出來順一次應該就能立刻解決了。

