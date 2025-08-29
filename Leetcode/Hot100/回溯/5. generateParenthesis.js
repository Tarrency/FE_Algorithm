/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    const backtrack = (left, right, str) => {
        if (left === n && right === n) return result.push(str)
        if (left < n) backtrack(left + 1, right, str + '(')
        if (right < left) backtrack(left, right + 1, str + ')')
    }
    backtrack(0, 0, '')
    return res
}
// 时间复杂度：O(4^n/√n)，空间复杂度：O(n)
// @lc code=end

