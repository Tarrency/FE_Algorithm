/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型
 * @return int整型
 *
 * 剪绳子
 *
 * 至少建议到
 * 求加和为某数的最大乘积
 *
 * 输入：8
 * 输出：18
 * 8 = 2 +3 +3 , 2*3*3=18
 *
 * 要求：时间复杂度 O(n)，空间复杂度 O(1)
 */

// 解法1：动态规划
function cutRopeDP(number) {
    // write code here
    // 一.动态规划（递归）：对于长度为n的绳子，剪第一刀时，有n-1种方式，剪出来的绳子长度可能从1到n-1
    // 因此fn=fi*fn-1 0<i<n 选出不同i的最大乘积 对于剩下的绳子可以自上往下递归求解
    // 但是以上太多重复子问题，另一种思路是从下往上，易得f2=1 f3=2。f4时，就是4了，可以切成2和2。
    if (number < 2) { return 0 }
    if (number === 2) { return 1 }
    if (number === 3) { return 2 }
    // 以上时父段绳子长度小于等于3的返回值，因为题目要求必须切一刀。而子段绳子为2或者3时没有切的必要，注意区分。
    const dp = [0, 1, 2, 3] // dp[i] 表示长度为 i 的绳子剪断后的最大乘积
    // 其实想明白这里可以用贪婪算法，具体参考其他解法
    for (let i = 4; i <= number; i++) {
        let max = 0
        for (let j = 1; j <= i / 2; j++) { // 乘法交换律 dp[j] * dp[i-j] = dp[i-j] * dp[j]，所以不需要重复计算
            const product = dp[j] * dp[i - j] // 对于长度为 i 的绳子，可以尝试在 j 处剪断，分成 j 和 i-j 两段
            if (product > max) max = product // dp[j] 已经考虑了 j 的所有剪法，所以 dp[j] * dp[i-j] 能覆盖所有可能的剪法
        }
        dp[i] = max
    }

    return dp[number]
}
// 时间复杂度 O(n^2)，空间复杂度 O(1)

// 解法2：贪心
function cutRope(number) {
    if (number < 2) return 0 // 无法剪
    if (number === 2) return 1 // 只能剪成 1+1
    if (number === 3) return 2 // 只能剪成 1+2

    let product = 1
    while (number > 4) { // 尽可能剪 3
        product *= 3
        number -= 3
    }
    product *= number // 最后剩下的 2/3/4 直接乘

    return product
}
// 时间复杂度 O(n)，空间复杂度 O(1)
