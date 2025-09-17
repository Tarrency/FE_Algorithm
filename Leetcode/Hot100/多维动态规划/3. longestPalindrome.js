/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 * 输入：s = "babad"
 * 输出："bab"
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// 解法1：双指针
var longestPalindrome = function(s) {
    let res = ''
    const singleTime = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--
            r++
        }
        // 多了一次，l+1, r-1
        const str = s.slice(l + 1, r - 1 + 1)
        // 更新res
        res = res.length > str.length ? res : str
    }
    // 遍历 中心扩散 找奇偶
    for (let i = 0; i < s.length; i++) {
        singleTime(i, i)
        singleTime(i, i + 1)
    }
    return res
}
// @lc code=end

