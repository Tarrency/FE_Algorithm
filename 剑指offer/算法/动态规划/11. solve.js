/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 解码
 * @param nums string字符串 数字串
 * @return int整型
 *
 * 输入："31717126241541717"
 * 返回值：192
 */

// 解法1：动态规划
function solve(nums) {
    // write code here
    const n = nums.length
    const dp = new Array(n + 1).fill(0)
    dp[0] = 1 // 空字符串可以有 1 种解码方法，解码出一个空字符串。
    for (let i = 1; i <= n; i++) {
        if (s[i - 1] !== '0') {
            dp[i] += dp[i - 1]
        }
        if (i > 1 && (s[i - 2] !== '0') && (((s[i - 2] - '0') * 10 + (s[i - 1] - '0') * 1) <= 26)) {
            dp[i] += dp[i - 2]
        }
    }
    return dp[n]
}
// 时间复杂度为 O(n)，空间复杂度为 O(n)

// 解法2：动态规划优化
function numDecodings(nums) {
    // write code here
    const n = nums.length
    let s2 = 0 // dp[i-2]
    let s1 = 1 // dp[i-1]
    let s = 0 // dp[i]
    for (let i = 1; i <= n; i++) {
        s = 0
        if (s[i - 1] !== '0') {
            s += s1
        }
        if (i > 1 && (s[i - 2] !== '0') && (((s[i - 2] - '0') * 10 + (s[i - 1] - '0') * 1) <= 26)) {
            s += s2
        }
        s2 = s1
        s1 = s
    }
    return s
}
// 时间复杂度为 O(n)，空间复杂度为 O(1)
