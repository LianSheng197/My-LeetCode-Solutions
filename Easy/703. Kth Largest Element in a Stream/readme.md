# 703. Kth Largest Element in a Stream

Design a class to find the `k^th` largest element in a stream. Note that it is the kth largest element in the sorted order, not the `k^th` distinct element.

Implement `KthLargest` class:

* `KthLargest(int k, int[] nums)` Initializes the object with the integer `k` and the stream of integers `nums`.
* `int add(int val)` Appends the integer `val` to the stream and returns the element representing the `k^th` largest element in the stream.
 

**Example 1:**
```
Input
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
Output
[null, 4, 5, 5, 8, 8]

Explanation
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8
```

**Constraints:**
* `1 <= k <= 10^4`
* `0 <= nums.length <= 10^4`
* `-10^4 <= nums[i] <= 10^4`
* `-10^4 <= val <= 10^4`
* At most `10^4` calls will be made to add.
* It is guaranteed that there will be at least `k` elements in the array when you search for the `k^th` element.


***
這題的範例看了好久才看懂原來是連續操作的意思。  
感覺不難，先寫再說。

[solution1.js](solution1.js)
* 時間複雜度：`O(nlogn)` (Array.prototype.sort)
* 空間複雜度：`O(n)`
* 提交成績：`4942ms (9%), 70.3MB (6%)` （笑死，也太慘）
* 提交日期：`2022-04-09`


果然不能偷懶，不能因爲這是 Easy 就隨便寫XDDD  
改一下好了，不要每次新增就排序，應該會快很多吧？

[solution2.js](solution2.js)
* 時間複雜度：`O(nlogn)`、`O(n)` (產生物件時是 `O(nlogn)`，執行 `add()` 時是 `O(n)`)
* 空間複雜度：`O(n)`
* 提交成績：`168ms (80%), 49.2MB (91%)` 
* 提交日期：`2022-04-09`


原本是打算用 binary search 解題的（取代 S2 的 `searchIndex()`）  
只可惜目前對 binary search 的掌握度仍然不足，改了老半天還是弄不好當找不到對應值也能傳回有效 index，最後只好改用 `O(n)` 的速解法。  
所幸執行效率依然相當亮眼，那就先這樣了 :D
