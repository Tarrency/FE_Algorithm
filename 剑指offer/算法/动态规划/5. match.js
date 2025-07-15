/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param str string字符串
 * @param pattern string字符串
 * @return bool布尔型
 *
 * 正则表达式匹配
 *
 * 输入："aaab","a*a*a*c"
 * 返回值：false
 *
 * 1.模式中的字符'.'表示任意一个字符
 * 2.模式中的字符'*'表示它前面的字符可以出现任意次（包含0次）。
 * ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）
 *
 */

// 解法1：递归
function isMatch(s, p) {
    if (p.length === 0) return s.length === 0
    // 第一个字符
    const firstMatch = s.length > 0 && (p[0] === s[0] || p[0] === '.')
    // 第二个字符
    if (p.length >= 2 && p[1] === '*') {
        // 两种情况：1. *匹配0次（跳过p的前两个字符） 2. *匹配1次或多次（消耗s的一个字符），但p保持不变（因为*可以继续匹配）
        return isMatch(s, p.slice(2)) || (firstMatch && isMatch(s.slice(1), p))
    } else {
        // 没有*的情况，直接匹配第一个字符然后递归
        return firstMatch && isMatch(s.slice(1), p.slice(1))
    }
}
// 时间复杂度：O(2^(m+n))，空间复杂度：O(m+n)

// 解法2：动态规划
// dp[i][j]表示s的前i个字符能否和p的前j个字符匹配
const isMatchDP = (s, p) => {
    if (s == null || p == null) return false// 极端情况 s和p都是空 返回false

    const sLen = s.length; const pLen = p.length

    const dp = new Array(sLen + 1)// 因为位置是从0开始的，第0个位置是空字符串 所以初始化长度是sLen + 1
    for (let i = 0; i < dp.length; i++) { // 初始化dp数组
        dp[i] = new Array(pLen + 1).fill(false) // 将项默认为false
    }
    // base case s和p第0个位置是匹配的
    dp[0][0] = true
    for (let j = 1; j < pLen + 1; j++) { // 初始化dp的第一列，此时s的位置是0
        // 情况1:如果p的第j-1个位置是*，则j的状态等于j-2的状态
        // 例如：s='' p='a*' 相当于p向前看2个位置如果匹配，则*相当于重复0个字符
        if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2]
    }
    // 迭代
    for (let i = 1; i < sLen + 1; i++) {
        for (let j = 1; j < pLen + 1; j++) {
            // 情况2:如果s和p当前字符是相等的 或者p当前位置是. 则当前的dp[i][j] 可由dp[i - 1][j - 1]转移过来
            // 当前位置相匹配，则s和p都向前看一位 如果前面所有字符相匹配 则当前位置前面的所有字符也匹配
            // 例如：s='XXXa' p='XXX.' 或者 s='XXXa' p='XXXa'
            if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1]
            } else if (p[j - 1] === '*') { // 情况3:进入当前字符不匹配的分支 如果当前p是* 则有可能会匹配
                // s当前位置和p前一个位置相同 或者p前一个位置等于. 则有三种可能
                // 其中一种情况能匹配 则当前位置的状态也能匹配
                // dp[i][j - 2]：p向前看2个位置，相当于*重复了0次，
                // dp[i][j - 1]：p向前看1个位置，相当于*重复了1次
                // dp[i - 1][j]：s向前看一个位置，相当于*重复了n次
                // 例如 s='XXXa' p='XXXa*'
                if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
                    dp[i][j] = dp[i][j - 2] || dp[i][j - 1] || dp[i - 1][j]
                } else {
                    // 情况4:s当前位置和p前2个位置不匹配，则相当于*重复了0次
                    // 例如 s='XXXb' p='XXXa*' 当前位置的状态和p向前看2个位置的状态相同
                    dp[i][j] = dp[i][j - 2]
                }
            }
        }
    }
    return dp[sLen][pLen] // 长为sLen的s串 是否匹配 长为pLen的p串
}
