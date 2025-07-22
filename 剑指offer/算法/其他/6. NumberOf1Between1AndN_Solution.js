/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型
 * @return int整型
 *
 * 整数中1出现的次数（从1到n整数中1出现的次数）
 *
 * 输入：13
 * 返回值：6
 *
 * 进阶：时间复杂度 O(lognn) ，时间复杂度O(1)
 *
 * 1、10、11、12、13
 */

// 解法1：数字规律法
function countDigitOne(n) {
    let count = 0
    let digit = 1 // 当前位的权重，从个位开始

    while (digit <= n) {
        const high = Math.floor(n / (digit * 10)) // high：当前位左侧的数字
        const cur = Math.floor(n / digit) % 10 // cur：当前位的数字
        const low = n % digit // low：当前位右侧的数字

        if (cur === 0) {
            count += high * digit // cur === 0：该位为1的数字有high * digit个
        } else if (cur === 1) {
            count += high * digit + low + 1 // cur === 1：该位为1的数字有high * digit + low + 1个
        } else {
            count += (high + 1) * digit // cur === 1：该位为1的数字有(high + 1) * digit个
        }

        digit *= 10
    }

    return count
}
// 时间复杂度O(logn)，空间复杂度O(1)

// 解法2：暴力法
function countDigitOneBruteForce(n) {
    let count = 0

    for (let i = 1; i <= n; i++) {
        let num = i
        while (num > 0) {
            if (num % 10 === 1) {
                count++
            }
            num = Math.floor(num / 10)
        }
    }

    return count
}
// 时间复杂度O(nlogn)，空间复杂度O(1)

// 解法2：枚举+正则
function NumberOf1Between1AndN_Solution(n) {
    const arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    const str = arr.join('')
    const res = str.match(/1/g)
    return res ? res.length : 0
}
// 时间复杂度O(n)，空间复杂度O(n)

// 解法3：字符串处理
function NumberOf1Between1AndN_Solution1(n) {
    // write code here
    if (n === 0) return 0
    const arr = []
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1
    }
    const res = arr.join('').split('').sort()
    return res.lastIndexOf('1') - res.indexOf('1') + 1
}
// 时间复杂度O(n)，空间复杂度O(n)

// 解法4：纯字符串
function NumberOf1Between1AndN_SolutionStr(n) {
    // write code here
    let count = 0
    for (let i = 1; i <= n; i++) {
        const str = String(i)
        for (let j = 0; j < str.length; j++) {
            if (str[j] === '1') count++
        }
    }
    return count
}
// 时间复杂度O(n)，空间复杂度O(n)
