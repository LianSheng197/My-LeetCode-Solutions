impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        // 假設傳入的數字 x 都是對稱的
        // 根據對稱條件重建數字 y
        // 如果重建後的數字 y 等於傳入的數字 x 就表示 x 確實是對稱的

        let mut current_number = x;
        let mut y = 0;

        while current_number > 0 {
            y = y * 10 + current_number % 10;
            current_number /= 10;
        }
        
        return x == y;
    }
}

// --------------------
struct Solution;

fn main() {
    println!("{}", Solution::is_palindrome(121));
    println!("{}", Solution::is_palindrome(-121));
    println!("{}", Solution::is_palindrome(10));
    println!("{}", Solution::is_palindrome(313));
    println!("{}", Solution::is_palindrome(1410110141));
    println!("{}", Solution::is_palindrome(1799999971));
}
