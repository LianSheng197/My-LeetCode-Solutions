# 284. Peeking Iterator

Design an iterator that supports the `peek` operation on an existing iterator in addition to the `hasNext` and the `next` operations.

Implement the `PeekingIterator` class:
* `PeekingIterator(Iterator<int> nums)` Initializes the object with the given integer iterator `iterator`.
* `int next()` Returns the next element in the array and moves the pointer to the next element.
* `boolean hasNext()` Returns `true` if there are still elements in the array.
* `int peek()` Returns the next element in the array without moving the pointer.

Note: Each language may have a different implementation of the constructor and `Iterator`, but they all support the `int next()` and `boolean hasNext()` functions.

 

**Example 1:**
```
Input
["PeekingIterator", "next", "peek", "next", "next", "hasNext"]
[[[1, 2, 3]], [], [], [], [], []]
Output
[null, 1, 2, 2, 3, false]

Explanation
PeekingIterator peekingIterator = new PeekingIterator([1, 2, 3]); // [1,2,3]
peekingIterator.next();    // return 1, the pointer moves to the next element [1,2,3].
peekingIterator.peek();    // return 2, the pointer does not move [1,2,3].
peekingIterator.next();    // return 2, the pointer moves to the next element [1,2,3]
peekingIterator.next();    // return 3, the pointer moves to the next element [1,2,3]
peekingIterator.hasNext(); // return False
```

**Constraints:**
* `1 <= nums.length <= 1000`
* `1 <= nums[i] <= 1000`
* All the calls to `next` and `peek` are valid.
* At most `1000` calls will be made to `next`, `hasNext`, and `peek`.


***
這題起初是不打算寫的，畢竟平時使用 js 時幾乎不會跟迭代器打交道...  
不過後來因爲一些原因，還是把它寫好。

> [solution1.js](solution1.js)
> * 時間複雜度：`O(1)`
> * 空間複雜度：`O(1)`
> * 提交成績：`68ms (66%), 43.3MB (86%)`
> * 提交日期：`2022-04-25`


就上面這個解法來說，沒什麼特別值得說的。

不過！

最初我是真的不打算寫這題，但是對於預設程式碼裡寫的東西很感興趣：

```js
// This is the Iterator's API interface
// You should not implement it, or speculate about its implementation
function Iterator() {
    /** @return {number} */
    this.next = function(){};
    /** @return {boolean} */
    this.hasNext = function(){};
}
```

正所謂越禁止就越想做的叛逆心理，當下我就偷看了它是怎麽實現的XDD

```js
; var __driver_helper__ = function(param_1) {
    var data;
    var index;
    
    var Iterator = function(v) {
        data = v;
        index = 0;
    };
    
    Iterator.prototype = {
        hasNext: function() {
            return index != data.length;
        },
        next: function() {
            var ret = -100000000;
            if (this.hasNext()) {
                ret = data[index];
                index++;
            }
            return ret;
        }
    }
    var itr = new Iterator(param_1);
    return itr;
};

// ------------------------------------------------------------ //
//                         中間略掉一大塊                         //
// ------------------------------------------------------------ //

var itr = __driver_helper__(deserializer.toIntegerArray(constructor_args[0]));
var obj = new PeekingIterator(itr);
```

好吧，看起來就算不知道上面這段程式碼，也不影響後續進一步實現 `follow up` 的目標。  
畢竟這對 js 而言根本什麼都不是。

原本是打算另外寫一個 `solution2.js` 的，不過這樣看來似乎沒這個必要。  
只需要把 `solution1.js` 裡的 `this.peekValue` 拿來存各種資料就可以了。  
程式改都不用改。（當然不算 jsdoc）

***

哦對了，這題是滿一個月的紀念題 :D  
正是因爲這樣我才決定把這題補了，即便我一開始真的不打算寫。