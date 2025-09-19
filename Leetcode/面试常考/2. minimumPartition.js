/*
 * @lc app=leetcode.cn id=2522 lang=javascript
 *
 * [2522] 将字符串分割成值不超过 K 的子字符串
 * 输入：s = "238182", k = 5
 * 输出：-1
 *
 * 输入：s = "165462", k = 60
 * 输出：4
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// 解法1：贪心，从左到右尽可能延长每个数值不超过k的子串，遇到单个字符就大于k时直接返回-1
var minimumPartition = function(s, k) {
    let res = 0; let i = 0; const len = s.length
    while (i < len) {
        if (s[i] <= k) {
            let j = i + 1
            while (j <= len && s.slice(i, j) <= k) j++
            i = j - 1
            res++
        } else return -1
    }
    return res
}
// 时间复杂度：O(n²)，空间复杂度：O(1)
// @lc code=end

