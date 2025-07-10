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
