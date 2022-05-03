impl Solution {
    pub fn min_operations(logs: Vec<String>) -> i32 {
        let mut result: i32 = 0;

        for log in logs.iter() {
            match &log[..] {
                "../" => result -= if result == 0 { 0 } else { 1 },
                "./" => continue,
                _ => result += 1
            }
        }

        return result;
    }
}

// --------------------
struct Solution;

// Ref: https://stackoverflow.com/a/38183903/8595750
macro_rules! vec_of_strings {
    ($($x:expr),*) => (vec![$($x.to_string()),*]);
}

fn main() {
    println!(
        "{}",
        Solution::min_operations(vec_of_strings!["d1/", "d2/", "../", "d21/", "./"])
    );
    println!(
        "{}",
        Solution::min_operations(vec_of_strings!["d1/","d2/","./","d3/","../","d31/"])
    );
    println!(
        "{}",
        Solution::min_operations(vec_of_strings!["d1/","../","../","../"])
    );
}
