# 347. Top K Frequent Elements

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in **any order**.

 

**Example 1:**
```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

**Example** 2:
```
Input: nums = [1], k = 1
Output: [1]
```

**Constraints:**
* `1 <= nums.length <= 10^5`
* `k` is in the range `[1, the number of unique elements in the array]`.
* It is **guaranteed** that the answer is **unique**.
 

**Follow up:** Your algorithm's time complexity must be better than `O(n log n)`, where n is the array's size.


***
感謝過去的解題經驗，現在看到這題的 **Follow Up** 就知道這題肯定要排序了。  
只是我很好奇，到底這句話有沒有包含 `O(nlogn)`？  
問了別人之後，看來是不包含。  
不包含的話，那這題我可能要先避開 **Follow Up** 了，這明顯超出我的能力。

既然這樣，那這題現階段我能自己想到的解法極有可能在 `O(nlogn)` 之上...  
只好放開寫囉~

反反覆覆改了將近四個小時，終於搞出一個能用的，但效率慘不忍睹。

[solution1.js](solution1.js)
* 時間複雜度：`O(k*n)` （不確定有沒有這種表示方法，總之 n 是陣列長度，k 是前 k 名）
* 空間複雜度：`O(n)`
* 提交成績：`508ms (5%), 44.2MB (95%)`
* 提交日期：`2022-04-10`


改是肯定要改的，可是今天我已經累了，改天再做吧。