/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = -1 // 当前候选的多数元素
    let count = 0 // 候选元素的计数

    for (const num of nums) {
        if (num === candidate) {
            count++ // 遇到相同元素，计数增加
        } else if (--count < 0) { // 不相等则count - 1
            // 计数减为负数，说明当前候选不是真正的多数
            candidate = num // 更换候选人为当前元素
            count = 1 // 重置计数为1
        }
    }
    return candidate
}
// @lc code=end

