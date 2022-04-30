impl Solution {
    pub fn roman_to_int(mut s: String) -> i32 {
        let romans = vec![
            "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I",
        ];
        let values = vec![1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

        let mut result: i32 = 0;
        let mut i: usize = 0;
        while i < romans.len() {
            while s.starts_with(romans[i]) {
                result += values[i];

                let count = romans[i].chars().count();
                if s.len() > count {
                    let index = s.char_indices().nth(count).unwrap().0;
                    s = String::from(&s[index..]);
                } else {
                    s = String::from("");
                }
            }

            i += 1;
        }

        return result;
    }
}

// --------------------
struct Solution;

fn main() {
    println!("{}", Solution::roman_to_int(String::from("III")));
    println!("{}", Solution::roman_to_int(String::from("LVIII")));
    println!("{}", Solution::roman_to_int(String::from("MCMXIV")));
}
