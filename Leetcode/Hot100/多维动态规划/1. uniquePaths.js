/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 * 输入：m = 3, n = 2
 * 输出：3
 * 解释：
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1. 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右
 * 3. 向下 -> 向右 -> 向下
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// 解法1：DP
var uniquePathsDP = function(m, n) {
    // f(i,j)=f(i−1,j)+f(i,j−1)
    const f = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        f[i][0] = 1
    }
    for (let j = 0; j < n; j++) {
        f[0][j] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            f[i][j] = f[i - 1][j] + f[i][j - 1]
        }
    }
    return f[m - 1][n - 1]
}
// 时间复杂度：O(mn)，空间复杂度：O(min(m,n))

// 解法2：数学法
var uniquePaths = function(m, n) {
    let res = 1
    for (let x = n, y = 1; y < m; ++x, ++y) { // 从起点到终点，总共需要移动 (m-1) + (n-1) = m+n-2 次，其中需要选择 m-1 次向下移动（或者 n-1 次向右移动）
        res = Math.floor(res * x / y) // C(m+n-2, m-1) = (m+n-2)! / [(m-1)! × (n-1)!] = [(m+n-2) × (m+n-3) × ... × n] / (m-1)!
    }
    return res
}
// 时间复杂度：O(min(m,n))，空间复杂度：O(1)

// @lc code=end

