/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let xor = 0
    for (const num of nums) {
        xor ^= num // 重复元素异或得0，剩下的是两个数字的异或值
    }
    return xor
}
// @lc code=end

