# 1114. Print in Order

Suppose we have a class:

```
public class Foo {
  public void first() { print("first"); }
  public void second() { print("second"); }
  public void third() { print("third"); }
}
```

The same instance of `Foo` will be passed to three different threads. Thread A will call `first()`, thread B will call `second()`, and thread C will call `third()`. Design a mechanism and modify the program to ensure that `second()` is executed after `first()`, and `third()` is executed after `second()`.

**Note:**

We do not know how the threads will be scheduled in the operating system, even though the numbers in the input seem to imply the ordering. The input format you see is mainly to ensure our tests' comprehensiveness.

 

**Example 1:**
```
Input: nums = [1,2,3]
Output: "firstsecondthird"
Explanation: There are three threads being fired asynchronously. The input [1,2,3] means thread A calls first(), thread B calls second(), and thread C calls third(). "firstsecondthird" is the correct output.
```

**Example 2:**
```
Input: nums = [1,3,2]
Output: "firstsecondthird"
Explanation: The input [1,3,2] means thread A calls first(), thread B calls third(), and thread C calls second(). "firstsecondthird" is the correct output.
```

**Constraints:**
* `nums` is a permutation of `[1, 2, 3]`.



***
發現有並行計算的題目，好奇摸摸看。  

有一種隔行如隔山的感覺，題目看了老半天才看懂，看懂後才意識到以前學的已經全忘光了XDDD  

總之，無論如何都要輸出 `"firstsecondthird"`，~~那我可不可以直接 print？~~  
開玩笑的，我想這題應該是在考上鎖吧？試試看。

[solution1.py](solution1.py)
* 提交成績：`74ms (61%), 14.4MB (62%)`
* 提交日期：`2022-04-11`

寫起來非常卡。又回到以前學程式時的感覺，寫一句查一句。  
一來是距離上次使用 `threading` 已經太久了。  
二來是對於多執行緒的概念已經幾乎忘光了，只有隱約記得 `lock` 之類的關鍵字。  
所幸 Python 的 threading 套件裡的 Lock 只有三種方法。  
這大大減少了我查文件的時間XDD

這種題目我想我短期不會再碰。  
因爲我不確定要怎麼在本機測試，剛剛都是寫完後感覺沒問題就直接提交答案。  
阿不就幸好有過，不然我連怎麽 debug 都沒概念。


後來想到怎麽寫本機測試了，於是把它補上 :D
