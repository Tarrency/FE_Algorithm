/*
 * @lc app=leetcode.cn id=2522 lang=javascript
 *
 * [2522] 将字符串分割成值不超过 K 的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function(s, k) {
    let ans = 0; let i = 0; const len = s.length
    while (i < len) {
        if (s[i] <= k) {
            let j = i + 1
            while (j <= len && s.slice(i, j) <= k) j++
            i = j - 1
            ans++
        } else return -1
    }
    return ans
}
// @lc code=end

