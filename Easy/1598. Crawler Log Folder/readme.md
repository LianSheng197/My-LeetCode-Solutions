# 1598. Crawler Log Folder

The Leetcode file system keeps a log each time some user performs a change folder operation.

The operations are described below:
* `"../"` : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
* `"./"` : Remain in the same folder
* `"x/"` : Move to the child folder named `x` (This folder is guaranteed to always exist).
You are given a list of strings `logs` where `logs[i]` is the operation performed by the user at the `i^th` step.

The file system starts in the main folder, then the operations in logs are performed.

Return the minimum number of operations needed to go back to the main folder after the change folder operations.

 

**Example 1:**
![](assets/sample_11_1957.png)
```
Input: logs = ["d1/","d2/","../","d21/","./"]
Output: 2
Explanation: Use this change folder operation "../" 2 times and go back to the main folder.
```

**Example 2:**
![](assets/sample_22_1957.png)
```
Input: logs = ["d1/","d2/","./","d3/","../","d31/"]
Output: 3
```

**Example 3:**
```
Input: logs = ["d1/","../","../","../"]
Output: 0
```

**Constraints:**
* `1 <= logs.length <= 10^3`
* `2 <= logs[i].length <= 10`
* `logs[i]` contains lowercase English letters, digits, `'.'`, and `'/'`.
* `logs[i]` follows the format described in the statement.
* Folder names consist of lowercase English letters and digits.



***
非常簡單的題目。  
不過題目敘述裡的這句 `"This folder is guaranteed to always exist"` 讓我一度懷疑是不是真的要做目錄切換的操作...？  
但後來仔細一想，若寫 js 時沒有碰過 Node.js 這種伺服器端的分支的話，那肯定是沒有概念，也就不會歸類在 Easy 了。所以肯定是我想多了。

### JavaScript
[solution1.js](solution1.js)
* 時間複雜度：`O(n)`
* 空間複雜度：`O(1)`
* 提交成績：`69ms (75%), 42.4MB (62%)`
* 提交日期：`2022-05-03`


