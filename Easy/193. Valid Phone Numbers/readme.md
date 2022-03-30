# 193. Valid Phone Numbers

Given a text file `file.txt` that contains a list of phone numbers (one per line), write a one-liner bash script to print all valid phone numbers.

You may assume that a valid phone number must appear in one of the following two formats: (xxx) xxx-xxxx or xxx-xxx-xxxx. (x means a digit)

You may also assume each line in the text file must not contain leading or trailing white spaces.

**Example:**

Assume that `file.txt` has the following content:
```
987-123-4567
123 456 7890
(123) 456-7890
```

Your script should output the following valid phone numbers:
```
987-123-4567
(123) 456-7890
```

***
突然發現原來 LeetCode 還有指令題  
因爲覺得太酷了所以忍不住挑一題簡單的來寫XD  

[solution1.sh](solution1.sh)
* 時間複雜度：`不適用`
* 提交時成績：`0ms (100%), 3.1MB (54%)`
* 提交日期：`2022-03-30`


簡單得有點過頭，怪不得題目得到 `261 推 / 695 噓` 這種評分...
