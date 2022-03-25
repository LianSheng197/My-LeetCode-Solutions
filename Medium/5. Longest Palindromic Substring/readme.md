# 5. Longest Palindromic Substring

Given a string `s`, return the longest palindromic substring in `s`.


**Example 1:**
```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

**Example 2:**
```
Input: s = "cbbd"
Output: "bb"
```

**Constraints:**
* `1 <= s.length <= 1000`
* `s` consist of only digits and English letters.


***

### Note
這題下意識跟[第 3 題](../3.%20Longest%20Substring%20Without%20Repeating%20Characters/readme.md)很像，秉著先做再說的想法，寫下去才發現要判斷回文好像不是一件很直觀的事... 或許該改用字典來暫存？ 最後邊修邊想，還是用陣列做就好。

[solution1.js](solution1.js)
* 未完成

邊寫邊修邊改後，發覺上面的思路有夠難寫，而且怎麽弄好像都缺了什麼...  
然後突然想到另一個做法，做法大致是分別由各個字元作爲中心，向兩側同時展開檢查。  
這麼簡單直觀的做法我怎麽會現在才想到呢XDD  
至於上面第一種寫法先暫時留著，另外開一個檔案：

[solution2.js](solution2.js)
* 時間複雜度：`O(n^2)` （大概吧）
* 提交時消耗：`201ms, 52.3 MB`

記憶體用量有點太高了呢，不過消耗時間倒是在平均水準。  
現在再回去看第一種做法，總覺得這條路就算能通也不實用 -- 難維護且不易理解。  
改天想不開再回去試好了，感覺那只需要用到 `O(n)` 而已？  


對了，後來看這題的解法跟討論，這才知道原來有一個演算法叫做 [Manacher](https://zh.wikipedia.org/wiki/%E6%9C%80%E9%95%BF%E5%9B%9E%E6%96%87%E5%AD%90%E4%B8%B2#Manacher%E7%AE%97%E6%B3%95) 是針對這種題目設計的。  
一樣，有空再看XD