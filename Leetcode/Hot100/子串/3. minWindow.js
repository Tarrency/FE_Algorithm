/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const map = new Map()
    for (const char of t) {
        map.set(char, (map.get(char) || 0) + 1)
    }

    let left = 0
    let right = 0
    let valid = 0
    let start = 0
    let minLen = Infinity

    while (right < s.length) {
        const rightS = s[right] // 改为 rightS
        if (map.has(rightS)) {
            map.set(rightS, map.get(rightS) - 1)
            if (map.get(rightS) === 0) {
                valid++
            }
        }
        right++

        while (valid === map.size) {
            if (right - left < minLen) {
                start = left
                minLen = right - left
            }

            const leftS = s[left] // 改为 leftS
            if (map.has(leftS)) {
                if (map.get(leftS) === 0) {
                    valid--
                }
                map.set(leftS, map.get(leftS) + 1)
            }
            left++
        }
    }

    return minLen === Infinity ? '' : s.substr(start, minLen)
}
// 时间复杂度：O(n)，空间复杂度O(n)
// @lc code=end

