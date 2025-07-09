/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型
 * @return int整型
 *
 * 数字序列中某一位的数字
 * 数字以 0123456789101112131415... 的格式作为一个字符序列，输出第 n 位对应的数字，从下标 0 开始计算
 * 数字以 123456789101112131415... 的格式作为一个字符序列，输出第 n 位对应的数字
 *
 * 输入：10
 * 返回值：1
 */

// 解法1：直接定位第 n 位数字所在的数及其具体位置
function findNthDigit(n) {
    // 记录n是几位数
    let digit = 1
    // 记录当前位数区间的起始数字：1,10,100...
    let start = 1
    // 记录当前区间之前总共有多少位数字
    let sum = 9

    // 将n定位在某个位数的区间中
    while (n > sum) {
        n -= sum
        start *= 10
        digit += 1
        // 该区间的总共位数
        sum = 9 * start * digit
    }

    // 定位n在哪个数字上，n-1是因为下标从0开始
    const num = start + Math.floor((n - 1) / digit)
    // 定位n在数字的哪一位上
    const index = (n - 1) % digit

    // 返回该位数字
    return parseInt(num.toString()[index])
}
// 时间复杂度：O(log₁₀ n)，空间复杂度：O(1)

// 解法2：二分，对digit（数字位数）二分
function findNthDigitBinary(n) {
    let low = 1; let high = 10
    let digit = 0

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const count = countDigits(mid)

        if (count < n) {
            low = mid + 1 // digit 在右侧
        } else {
            digit = mid // 可能解
            high = mid - 1 // 尝试找更小的 digit
        }
    }

    // 计算具体数字和位数
    const prevCount = countDigits(digit - 1)
    const num = Math.pow(10, digit - 1) + Math.floor((n - prevCount - 1) / digit)
    const index = (n - prevCount - 1) % digit

    return parseInt(num.toString()[index])
}

// 计算 1 到 digit 位数的数字总位数
function countDigits(digit) {
    if (digit === 0) return 0
    let sum = 0
    for (let d = 1; d <= digit; d++) {
        sum += 9 * Math.pow(10, d - 1) * d
    }
    return sum
}
// 时间复杂度：O(logD)，D=10，O(1)；空间复杂度：O(1)
