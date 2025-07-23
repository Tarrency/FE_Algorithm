/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param number long长整型
 * @return long长整型
 *
 * 剪绳子（进阶版）
 * 求加和为某数的最大乘积
 * 大数，求模
 * 要求：时间复杂度 O(logn)，空间复杂度 O(n)
 *
 * 输入：8
 * 输出：18
 * 8 = 2 +3 +3 , 2*3*3=18
 */
const MOD = 998244353n

// 快速乘法（防止大数溢出）
function fastMultiply(x, y) {
    let res = 0n
    x = x % MOD
    y = y % MOD
    while (y > 0n) {
        if (y & 1n) {
            res += x
            if (res >= MOD) res -= MOD
        }
        y = y >> 1n
        x = x << 1n
        if (x >= MOD) x -= MOD
    }
    return res
}

// 快速幂
function fastPow(x, y) {
    let res = 1n
    while (y > 0n) {
        if (y & 1n) {
            res = fastMultiply(res, x)
        }
        x = fastMultiply(x, x)
        y = y >> 1n
    }
    return res
}

// 主函数
function cutRope(number) {
    const n = BigInt(number)
    if (n <= 3n) return Number(n - 1n)

    if (n % 3n === 0n) {
        return Number(fastPow(3n, n / 3n))
    } else if (n % 3n === 1n) {
        return Number(fastMultiply(fastPow(3n, n / 3n - 1n), 4n))
    } else {
        return Number(fastMultiply(fastPow(3n, n / 3n), 2n))
    }
}
