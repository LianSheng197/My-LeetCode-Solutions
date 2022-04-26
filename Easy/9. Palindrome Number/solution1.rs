impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        fn get_digit(number: i32, index: i32) -> i32 {
            return number.to_string().chars().nth(index as usize).unwrap() as i32 - '0' as i32;
        }

        if x < 0 || (x % 10 == 0 && x >= 10) {
            return false;
        }

        let digits = (x as f64).log10().ceil() as i32;

        if digits % 2 == 1 {
            // 1234321
            let center_power: i32 = ((digits - 1) as f32 / 2.0) as i32;
            let mut shift: i32 = 1;

            while center_power + shift < digits {
                let left: i32 = get_digit(x, center_power + shift);
                let right: i32 = get_digit(x, center_power - shift);

                if left != right {
                    return false;
                }

                shift += 1;
            }
        } else {
            // 12344321
            let center_power: i32 = (digits as f32 / 2.0) as i32;
            let mut shift: i32 = 0;

            while center_power + shift < digits {
                let left: i32 = get_digit(x, center_power + shift);
                let right: i32 = get_digit(x, center_power - shift - 1);

                if left != right {
                    return false;
                }

                shift += 1;
            }
        }

        return true;
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
