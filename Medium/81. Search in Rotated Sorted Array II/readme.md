# 81. Search in Rotated Sorted Array II

There is an integer array `nums` sorted in non-decreasing order (not necessarily with **distinct** values).

Before being passed to your function, `nums` is **rotated** at an unknown pivot index `k` (`0 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` **(0-indexed)**. For example, `[0,1,2,4,4,4,5,6,6,7]` might be rotated at pivot index 5 and become `[4,5,6,6,7,0,1,2,4,4]`.

Given the array `nums` **after** the rotation and an integer `target`, return `true` if `target` is in `nums`, or `false` if it is not in `nums`.

You must decrease the overall operation steps as much as possible.

 

**Example 1:**
```
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
```

**Example 2:**
```
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
```

**Constraints:**
* `1 <= nums.length <= 5000`
* `-104 <= nums[i] <= 104`
* `nums` is guaranteed to be rotated at some pivot.
* `-104 <= target <= 104`
 

**Follow up:** This problem is similar to [Search in Rotated Sorted Array](#Q33), but `nums` may contain **duplicates**. Would this affect the runtime complexity? How and why?


***
最近發現每日解題可以拿代幣，也許我可以把目標改成湊到 6000+ 兌換實體獎勵？

因爲是每日隨機，所以這題提到的 Follow Up 只能暫時先擱著了。

[solution1.js](solution1.js)
* 時間複雜度：`O(n)`
* 提交時成績：`92ms (43%), 44MB (13%)` （記憶體用量排名挺慘的，看了下排名，大多數人落在 `42MB ~ 43MB`， 看來是寫法太隨意了）
* 提交日期：`2022-03-28`


這題比想象中的簡單。  
題目噼里啪啦講一大堆，結果大多數都是煙霧彈而已，實際理解後幾乎沒有難度。  
只不過解的出來是一回事，效率好不好又是另一回事了。看了下記憶體用量的排名實在慘不忍睹，也許我該想想如何改進...

看了一下題解，似乎還要用到 [Bianry Search](https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%90%9C%E5%B0%8B%E6%BC%94%E7%AE%97%E6%B3%95)，而且還要考慮多種情境，不能一股腦地全部塞給程式去跑，這樣才能提高效率。  
可是，老實說我對 Binary Search 還不熟，這個部分只好先不展開了。  

交給以後的我吧，如果我還記得的話。
