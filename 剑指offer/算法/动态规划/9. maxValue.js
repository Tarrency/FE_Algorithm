/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param grid int整型二维数组
 * @return int整型
 *
 * 礼物的最大价值
 *
 * 输入：[[1,3,1],[1,5,1],[4,2,1]]
 * 返回值：12
 *
 */

// 解法1：动态规划，方程：dp[i][j] = grid[i][j] + Math.max(dp[i-1][j], dp[i][j-1])
// dp[i][j] 表示从网格的左上角 (0, 0) 走到 (i, j) 时，能获取的礼物的最大价值，动态规划表，存储从起点到每个位置的最大路径和
function maxValue(grid) {
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

    // 2. 填充第一行和第一列
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i][0] + grid[i - 1][0]
    }

    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j - 1]
    }

    // 3. 计算动态规划关系表
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = grid[i][j] + Math.max(dp[i][j - 1], dp[i - 1][j])
        }
    }

    return dp[i - 1][j - 1]
}
// 时间复杂度：O(mn)
// 空间复杂度：O(mn)
