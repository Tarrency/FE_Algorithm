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
// 时间复杂度：O(n²)，空间复杂度：O(1)

// 解法2：DP
var longestPalindromeDP = function(s) {
    const n = s.length
    if (n < 2) return s

    let maxLen = 1
    let start = 0

    // 创建二维DP数组
    const dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(false)
        dp[i][i] = true // 单个字符都是回文
    }

    // 按子串长度遍历
    for (let L = 2; L <= n; L++) {
        for (let i = 0; i < n; i++) {
            const j = i + L - 1
            if (j >= n) break

            if (s[i] !== s[j]) {
                dp[i][j] = false
            } else {
                if (L <= 3) { // 长度2或3
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
            }

            // 更新最长回文
            if (dp[i][j] && L > maxLen) {
                maxLen = L
                start = i
            }
        }
    }

    return s.substring(start, start + maxLen)
}
// @lc code=end

