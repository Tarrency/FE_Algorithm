/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 * 输入：x = 8
 * 输出：2
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */

// 解法1：二分
var mySqrt = function(x) {
    let l = 0; let r = x; let res = -1
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        if (mid * mid <= x) {
            res = mid
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return res
}
// @lc code=end

