use std::collections::HashMap;
use std::vec;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut store: HashMap<i32, usize> = HashMap::new();
        let (mut a, mut b): (usize, usize) = (0, 0);

        for (k, v) in nums.iter().enumerate() {
            if store.get(&(target - v)).is_none() {
                store.insert(*v, k);
            } else {
                a = k;
                b = *store.get(&(target - v)).unwrap();
            }
        }

        if a > b {
            return vec![b as i32, a as i32];
        } else {
            return vec![a as i32, b as i32];
        }        
    }
}

// -------------
struct Solution;

fn main() {
    println!("{:?}", Solution::two_sum(vec![2, 7, 11, 15], 9));
    println!("{:?}", Solution::two_sum(vec![3, 2, 4], 6));
    println!("{:?}", Solution::two_sum(vec![3, 3], 6));
}