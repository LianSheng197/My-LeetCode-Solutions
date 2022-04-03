# 1827. Minimum Operations to Make the Array Increasing

You are given an integer array `nums` (**0-indexed**). In one operation, you can choose an element of the array and increment it by `1`.

* For example, if `nums = [1,2,3]`, you can choose to increment `nums[1]` to make `nums = [1,3,3]`.

Return the **minimum** number of operations needed to make `nums` **strictly increasing**.

An array `nums` is **strictly increasing** if `nums[i] < nums[i+1]` for all `0 <= i < nums.length - 1`. An array of length `1` is trivially strictly increasing.

 

**Example 1:**
```
Input: nums = [1,1,1]
Output: 3
Explanation: You can do the following operations:
1) Increment nums[2], so nums becomes [1,1,2].
2) Increment nums[1], so nums becomes [1,2,2].
3) Increment nums[2], so nums becomes [1,2,3].
```

**Example 2:**
```
Input: nums = [1,5,2,4,1]
Output: 14
```

**Example 3:**
```
Input: nums = [8]
Output: 0
```

**Constraints:**
* `1 <= nums.length <= 5000`
* `1 <= nums[i] <= 10^4`



***
### Note
因爲剛好有討論到這題，所以半路插隊一下 :D

這題看到時腦袋就浮出一個 `O(n)` 的做法，實際做了之後確實可行。

[solution1.js](solution1.js)
* 時間複雜度：`O(n)`
* 提交時成績：`60ms (97%), 44.3MB (19%)`
* 提交日期：`2022-04-04`


這題大概花不到 10 分鐘，對我而言算是很快的了。  
同時也能感覺到出題作者故意設的陷阱，不過多虧前面做了一些題目，我才能直接看穿而沒有掉下去XD  
刷這些題目真的是有用的呢（讚讚）