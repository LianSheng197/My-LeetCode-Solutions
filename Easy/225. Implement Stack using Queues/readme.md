# 225. Implement Stack using Queues

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the `MyStack` class:

* `void push(int x)` Pushes element x to the top of the stack.
* `int pop()` Removes the element on the top of the stack and returns it.
* `int top()` Returns the element on the top of the stack.
* `boolean empty()` Returns true if the stack is empty, false otherwise.


**Notes:**

You must use **only** standard operations of a queue, which means that only `push to back`, `peek/pop from front`, `size` and is `empty` operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 

**Example 1:**
```
Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
```

**Constraints:**
* `1 <= x <= 9`
* At most `100` calls will be made to `push`, `pop`, `top`, and `empty`.
* All the calls to `pop` and `top` are valid.
 

**Follow-up:** Can you implement the stack using only one queue?


***
這題沒有難度。   
不過解法中用到了 `Array.splice()`，我不確定這究竟是 `O(n)` 還是 `O(1)`...
姑且先當作是 `O(1)` 吧，哈哈

> [solution1.js](solution1.js)
> * 時間複雜度：`O(1)`
> * 空間複雜度：`O(1)`
> * 提交成績：`58ms (91%), 42.2MB (24%)`
> * 提交日期：`2022-05-05`

後來又針對這個部分去找，發現原來也有人對此疑問，然後解答是說最差 `O(n)` 最好 `O(1)`。  
而在這題裡則是 `O(1)`，因為只有刪除一個元素。([參考文章](https://stackoverflow.com/a/5175958))

不過這表示 Array.splice() 是透過連結串列做的？不然怎麼可能辦到這種效率？  
針對這點，我嘗試去搜技術文件... 結果 [ECMA262 (23.1.3.29)](https://tc39.es/ecma262/#sec-array.prototype.splice) 沒有規範實作的具體流程，我的意思是，它沒有限制具體用什麼資料結構或演算法實現刪除這個動作。

原本打算翻 `v8` 原始碼的，不過湊巧看到這篇 [How are JavaScript arrays represented in physical memory?](https://stackoverflow.com/a/20323491/8595750)，看來 JavaScript 實現 Array 是用 Object 的方式去做，也難怪可以做到 `O(1)`。

至於翻原始碼嗎？這次就先算了，我懶。