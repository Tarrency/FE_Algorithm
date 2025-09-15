/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 * 输入：s = "aab"
 * 输出：[["a","a","b"],["aa","b"]]
 * 给你一个字符串 s，请你将 s 分割成一些 子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = []

    function dfs(temp, start) {
        if (start === s.length) {
            res.push(temp.slice())
            return
        }
        for (let i = start; i < s.length; i++) {
            if (isPali(s, start, i)) {
                temp.push(s.substring(start, i + 1))
                dfs(temp, i + 1)
                temp.pop()
            }
        }
    }
    dfs([], 0)
    return res
}

function isPali(s, l, r) {
    while (l < r) {
        if (s[l] !== s[r]) {
            return false
        }
        l++
        r--
    }
    return true
}

// @lc code=end

