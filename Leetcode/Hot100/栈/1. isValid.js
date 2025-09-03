/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 * 输入：s = "()[]{}([])"
 * 输出：true
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const L = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        } else {
            if (!stack.length || stack.pop() !== L[s[i]]) {
                return false
            }
        }
    }
    return !stack.length
}
// @lc code=end

