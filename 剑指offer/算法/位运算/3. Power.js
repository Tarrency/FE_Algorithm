/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型
 * @return int整型
 *
 * 数值的整数次方
 *
 * 输入：2.10000,3
 * 返回值：9.26100
 * 要求：时间复杂度O(n) ，空间复杂度O(1)
 */

// 解法1：快速幂
var myPow = function(x, n) {
    if (n === 0) return 1
    if (n < 0) {
        x = 1 / x
        n = -n
    }
    let res = 1
    while (n > 0) {
        if (n % 2 === 1) { // 如果n是奇数，先乘一个x
            res *= x
        }
        x *= x // x = x^2
        n = Math.floor(n / 2) // n = n // 2
    }
    return res
}
// 优化到了时间复杂度O(logn)

// 解法2：暴力
function Power(x, n) {
    if (n === 0) return 1 // x^0 = 1
    if (n < 0) { // 处理负数情况
        x = 1 / x
        n = -n
    }
    let res = 1
    for (let i = 0; i < n; i++) { // 循环 n 次，每次乘 x
        res *= x
    }
    return res
}
