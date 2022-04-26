# 1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

**Example 1:**
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

**Constraints:**
* `2 <= nums.length <= 10^4`
* `-10^9 <= nums[i] <= 10^9`
* `-10^9 <= target <= 10^9`
* Only one valid answer exists.

**Follow-up**: Can you come up with an algorithm that is less than `O(n2)` time complexity?


***
### Note
既然是要找到兩個數相加等於目標值，很自然的會想到用兩層迴圈去解...   
嗯，很理所當然的通過了，畢竟這是第一題，應該不會太兇。

[solution1.js](solution1.js) 
* 時間複雜度： `O(n2)`
* 提交時消耗： `144ms, 42.7 MB`


不過這題有個追加：是否可以把時間複雜度小於 `O(n2)` 呢？  
題目底下有一個提示：
```
The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?
```
多虧了它，我想我知道要怎麼做了。

[solution2.js](solution2.js) 
* 時間複雜度： `O(n)`
* 提交時消耗： `60ms, 42.8 MB`


[solution1.rs](solution1.rs)
* 時間複雜度：`O(n)`
* 空間複雜度：`O(n)`
* 提交成績：`4ms (49%), 2.6MB (18%)`
* 提交日期：`2022-04-27`
