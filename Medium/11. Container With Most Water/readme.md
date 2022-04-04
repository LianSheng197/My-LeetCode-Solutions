# 11. Container With Most Water

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i^th` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

**Notice** that you may not slant the container.

 
**Example 1:**  
![](assets/question_11.jpg)
```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

**Example 2:**
```
Input: height = [1,1]
Output: 1
```

**Constraints:**
* `n == height.length`
* `2 <= n <= 10^5`
* `0 <= height[i] <= 10^4`



***

這題第一次看到時讓我愣住 - 完全不知道從哪裡下手。  
不過仔細思考後還是有個方向，爲了加速驗證可行性，我打算用一些自帶的函式偷吃步一下。

~~[solution1.js](solution1.js)~~
* 此解法已捨棄。
* **原因：**  
  原本打算用排序找出最大值，結果後來發現最大面積未必出現在兩個最長之間。  
  嘗試基於排序，但改用別的方法去做的話又會離不開雙層迴圈... 看了下題目的測資範圍，這不用試都知道肯定 TLE。


上面的思路不可行的話，那怎麽辦呢？  

再次拿出紙筆，嘗試對看不見的鴨子解釋這道題目，然後...  
我想我知道要怎麽做了。隱約想到一個 `O(n)` 的解法，希望可行。

[solution2.js](solution2.js)
* 時間複雜度：`O(n)` 
* 空間複雜度：`O(1)` 
* 提交時成績：`72ms (94%), 49.6MB (61%)`
* 提交日期：`2022-04-04`


方向對了，寫起來也比預期的順，效率也很讚。  
這題真的是很棒的題目，至少這是我不足的地方。


結果解完之後才發現題目底下有提示... 相見恨晚。  
要是我一開始就看到提示的話，就不會有那個寫一半就放棄的 S1 了XDDD