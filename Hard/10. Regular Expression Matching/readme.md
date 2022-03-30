# 10. Regular Expression Matching

Given an input string `s` and a pattern `p`, implement regular expression matching with support for `'.'` and `'*'` where:

* `'.'` Matches any single character.​​​​
* `'*'` Matches zero or more of the preceding element.
* 
The matching should cover the **entire** input string (not partial).

 

**Example 1:**
```
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

**Example 2:**
```
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

**Example 3:**
```
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```

**Constraints:**
* `1 <= s.length <= 20`
* `1 <= p.length <= 30`
* `s` contains only lowercase English letters.
* `p` contains only lowercase English letters, `'.'`, and `'*'`.
* It is guaranteed for each appearance of the character `'*'`, there will be a previous valid character to match.


***
### Note

被題目名稱吸引進來。  
用了這麼久的 Regex，對它是又愛又恨，藉這個機會來看看到底是怎麽實現的。

因爲題目保證 `'*'` 之前必定有有效字元，所以可以減少大量例外判斷。  
不過 Regex 涉及貪婪模式，這個不知道要怎麽寫才能確保效率，只好先用我流拼湊一個寫法了。  
~~由於 `'*`' 是配對 `0 ~ n` 個，因此採取逆序（由右到左）的掃描方向，不然很難處理不定長度的問題。~~  
~~逆序的話反而要處理開頭固定字元的問題，不管怎麼樣都不好寫，不如還是用正序比較直觀且習慣一點。~~  
後來覺得用迴圈似乎寫不太起來，因爲貪婪模式很難處理，可能還是得用遞迴，希望記憶體用量不會爆炸QQ

[solution1.js](solution1.js)
* 時間複雜度：`O(???)` （這個遞迴的做法我完全不知道怎麽計算...）
* 提交時成績：`873ms (5%), 43.6MB (67%)` （這耗時也太悽慘）
* 提交日期：`2022-03-31`

這題好難，真的好難。  
原本想說只有要實現 `'.'` 和 `'*'` 應該還行吧？  
結果從迴圈正序、逆序再到遞迴改了好幾次才過。Q_Q  
我討厭用遞迴，很難 debug 呀。  

出乎意料的是，我原本以爲記憶體會爆炸，結果反而是耗時慘不忍睹...  
肯定哪裡漏了什麼，5% 真的太扯了。


爲了解決那無法直視的耗時，我想基於 solution1 改點東西...

[solution2.js](solution2.js)
* 時間複雜度：`O(???)` （這個遞迴的做法我完全不知道怎麽計算...）
* 提交時成績：`102ms (81%), 45.6MB (42%)`  （犧牲一點記憶體換來超高效率，值了！）
* 提交日期：`2022-03-31`


在參考其他人的寫法時意外看到[這篇討論文章](https://leetcode.com/problems/regular-expression-matching/discuss/680544/JavaScript-Clean-Recursive-DP-Memoization-Beats-88)。  
看了之後發現我的 solution1 寫法基本上跟他一樣，只差少了 Map 以及中間一行值得學習的寫法：
```js
result = recurse(sIdx, pIdx+2) || recurse(sIdx+1, pIdx);
```
我原本的寫法是以高維護性的角度在做的，所以還另外存 r1, r2。  
然而這麼做的話，一來會多使用兩個變數，二來就是不管 r1 是否成真，r2 都必須做過。  
這樣一來，上面的做法就凸顯出它的優點了，也許記憶體不會差太多，但是它有機率節省一半的操作時間（當 r1 成立時）

然後參考文章使用的是 Map  
這部分我不太清楚是作者習慣還是效率考量  
總之不熟悉的東西我不會使用，所以還是改成物件方式去存。

然後就獲得了八倍效率，太讚了吧！
