/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const ret = []

    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1)
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = ret[i - 1][j - 1] + ret[i - 1][j]
        }
        ret.push(row)
    }
    return ret
}
// 时间复杂度：O(numRows2)。空间复杂度：O(1)。不考虑返回值的空间占用。
// @lc code=end

