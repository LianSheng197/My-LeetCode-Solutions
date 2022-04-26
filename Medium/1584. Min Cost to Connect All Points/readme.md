# 1584. Min Cost to Connect All Points

You are given an array `points` representing integer coordinates of some points on a 2D-plane, where `points[i] = [x~i, y~i]`.

The cost of connecting two points `[x~i, y~i]` and `[x~j, y~j]` is the manhattan distance between them: `|x~i - x~j| + |y~i - y~j|`, where `|val|` denotes the absolute value of `val`.

Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.

 

**Example 1:**  
![](assets/d.png) ![](assets/c.png) 
```
Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
Output: 20
Explanation: 


We can connect the points as shown above to get the minimum cost of 20.
Notice that there is a unique path between every pair of points.
```

**Example 2:**
```
Input: points = [[3,12],[-2,5],[-4,1]]
Output: 18
```

**Constraints:**
* `1 <= points.length <= 1000`
* `-10^6 <= x~i, y~i <= 10^6`
* All pairs `(x~i, y~i)` are distinct.



***
明顯是圖論的題目... 看起來是最小生成樹。  
過去從來沒寫過類似題目，實在沒把握能解出來。  
先試試吧。

> [solution1.js](solution1.js)
> * 採用 [Kruskal 演算法](https://zh.wikipedia.org/wiki/%E5%85%8B%E9%B2%81%E6%96%AF%E5%85%8B%E5%B0%94%E6%BC%94%E7%AE%97%E6%B3%95)
> * 平均時間複雜度：`O(|E| log |V|)` （E 表示邊界、V 表示頂點）
> * 空間複雜度：`Ω(|E| + |V|)` （E 表示邊界、V 表示頂點）
> * 提交成績：`1676 ms (51%), 90.5MB (86%)`
> * 提交日期：`2022-04-26`

還有好幾種其他的演算法可以解這道題，不過... 以後再做也不遲 :D