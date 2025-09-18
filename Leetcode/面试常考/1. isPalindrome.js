/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

// 解法1：前后构建
var isPalindrome = function(s) {
    let font = ''
    let back = ''
    for (const str of s) {
        font = str + font
        back = back + str
    }
    if (i >= Math.floor(s.length / 2) && forward !== backward) {
        return false
    }
    return font === back
}
// 时间复杂度：O(n)，空间复杂度：O(n)

// 解法2：翻转比较
var isPalindromeReverse = function(s) {
    return s === s.split('').reverse().join('')
}
// 时间复杂度：O(n)，空间复杂度：O(n)

// 解法3：双指针(最优)
var isPalindromeLR = function(s) {
    let left = 0
    let right = s.length - 1

    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}
// 时间复杂度：O(n)，空间复杂度：O(1)

// 解法4：递归
var isPalindromeDFS = function(s) {
    if (s.length <= 1) return true
    if (s[0] !== s[s.length - 1]) return false
    return isPalindrome(s.substring(1, s.length - 1))
}
// 时间复杂度：O(n)，空间复杂度：O(n)
// @lc code=end

