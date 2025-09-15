/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 * 和为 n 的完全平方数的最少数量
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 解法1：动态规划
var numSquares = function(n) {
    const f = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) {
        let minn = Number.MAX_VALUE
        for (let j = 1; j * j <= i; j++) {
            minn = Math.min(minn, f[i - j * j])
        }
        f[i] = minn + 1
    }
    return f[n]
}
// 时间复杂度：O(n根号n)，空间复杂度：O(n)
// @lc code=end

