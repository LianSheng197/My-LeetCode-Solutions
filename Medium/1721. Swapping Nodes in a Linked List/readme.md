# 1721. Swapping Nodes in a Linked List

You are given the `head` of a linked list, and an integer `k`.

Return the head of the linked list after **swapping** the values of the `k^th` node from the beginning and the `k^th` node from the end (the list is **1-indexed**).

 

**Example 1:**  
![](assets/linked1.jpg)  
```
Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]
```

**Example 2:**
```
Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
```

**Constraints:**
* The number of nodes in the list is `n`.
* `1 <= k <= n <= 10^5`
* `0 <= Node.val <= 100`


***
就鏈結串列，沒什麼想法。

看懂題目時腦袋裡有個雛形了，寫到一半發現題目有提示，所以就先改用提示的方式做。  
結果呢？意料中的耗時XDD

[solution1.js](solution1.js)
* 時間複雜度：`O(n)` （實際上是 2n）
* 空間複雜度：`O(n)` （實際上是純值）
* 提交時成績：`656ms (25%), 115.5MB (5%)` （結果記憶體用量比預期的還慘）
* 提交日期：`2022-04-04`


寫完一次上面的解法後，原本腦袋中的雛形就慢慢浮現全貌了。  
其實就只是拿空間換時間而已，節省掉重建鏈結串列的步驟，我想應該可以省不少時間。

[solution2.js](solution2.js)
* 時間複雜度：`O(n)` 
* 空間複雜度：`O(n)` （實際上是節點）
* 提交時成績：`520ms (68%), 108.8MB (11%)` （結果記憶體反而省了，或許是物件傳參照的原因？）
* 提交日期：`2022-04-04`

我還在思考，有沒有不用存陣列的方法呢？  
有是有，例如另外給每個節點塞 prev 屬性，但這樣會不會算犯規？  
實務上這麼做肯定會被打死（函式有回傳值，結果還有副作用），總之我就想試試  
不過現實常常看到「爲求目的不擇手段」的人，這種人好像反而升的比較快🤔  
後來想想既然都要回推，所以就順便把 prev 砍掉了。  
副作用只在執行階段存在，這樣不知道是否可行？

[solution3.js](solution3.js)
* 時間複雜度：`O(n)` （實際上是 2n）
* 空間複雜度：`O(1)` （執行期間有副作用）
* 提交時成績：`559ms (55%), 100.8MB (77%)` （省下一堆記憶體，比起 S2 來說比較耗時，但絕對比 S1 快）
* 提交日期：`2022-04-04`



不知道排行榜那些用量 `80MB`，耗時 `450ms` 的是怎麽做到的，真的只是浮動差嗎？

看了不少討論後，看到[這篇](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/discuss/1632337/Easy-Fast-Simple-85.1-512-ms-78.2-MB)

這篇真的厲害，只不過沒有註解，讓我花了一些時間去理解。  
這是一個很聰明的做法，雖說只適用於這題（因爲對稱性），不過值得多看幾眼。  
這裡我把它用我的寫法理一遍，並放上註解：

[solution4.js](solution4.js)
* 時間複雜度：`O(n)` 
* 空間複雜度：`O(1)` （完全沒有副作用）
* 提交時成績：`464ms (95%), 78.7MB (96%)` （目前看到最佳解法）
* 提交日期：`2022-04-04`

