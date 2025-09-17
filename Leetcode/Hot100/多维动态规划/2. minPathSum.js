/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    // write code here

    // 1. 初始化二维数组
    const dp = []
    const m = grid.length
    const n = grid[0].length
    for (let i = 0; i < m; i++) {
        dp[i] = []
        for (let j = 0; j < n; j++) {
            dp[i][j] = 0
        }
    }
    dp[0][0] = grid[0][0] // dp[0][0]并不是初始化的0

    // 2. 填充第一行和第一列
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    }

    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j]
    }

    // 3. 计算动态规划关系表
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = grid[i][j] + Math.min(dp[i][j - 1], dp[i - 1][j])
        }
    }

    return dp[m - 1][n - 1]
}
// @lc code=end

