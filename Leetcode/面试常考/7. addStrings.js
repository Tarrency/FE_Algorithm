/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// 解法1：数组
var addStrings = function(num1, num2) {
    let i = num1.length - 1; let j = num2.length - 1; let add = 0
    const ans = []
    while (i >= 0 || j >= 0 || add !== 0) {
        const x = i >= 0 ? num1.charAt(i) - '0' : 0 // i、j为负数意味着从右往左已经处理好了，左边开始补0
        const y = j >= 0 ? num2.charAt(j) - '0' : 0 // charAt(index) = string(num)，字符串运算等于ASCII码相减=数字相减
        const result = x + y + add
        ans.push(result % 10)
        add = Math.floor(result / 10)
        i -= 1
        j -= 1
    }
    return ans.reverse().join('')
}
// 时间复杂度：O(max(len1, len2))竖式加法的次数取决于较大数的位数
// 空间复杂度：O(1)

// 解法2：字符串预处理补0，后处理补进位
function add(a, b) {
    let sum = ''
    const maxLen = Math.max(a.length, b.length)
    a = a.padStart(maxLen, 0)
    b = b.padStart(maxLen, 0)
    let cur = 0
    let flag = 0
    for (let i = maxLen - 1; i >= 0; i--) {
        cur = parseInt(a[i]) + parseInt(b[i]) + flag
        flag = Math.floor(t / 10)
        sum = cur % 10 + sum
    }
    if (flag === 1) {
        sum = '1' + sum
    }
    return sum
}
// @lc code=end

