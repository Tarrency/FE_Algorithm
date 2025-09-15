/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 * 输入: s = "leetcode", wordDict = ["leet", "code"]
 * 输出: true
 * 解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length
    const wordDictSet = new Set(wordDict)
    const dp = new Array(n + 1).fill(false)
    dp[0] = true // 空字符串 "" 总是可分割的
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDictSet.has(s.substring(j, i))) { // dp[j]表示前j位已经判断有了
                dp[i] = true
                break
            }
        }
    }
    return dp[n]
}
// 时间复杂度：O(n^2)，空间复杂度：O(n)
// @lc code=end

