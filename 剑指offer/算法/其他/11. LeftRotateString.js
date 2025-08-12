/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param str string字符串型
 * @param n int整型
 * @return string字符串型
 *
 * 左旋转字符串
 *
 * 数组有序
 * 输入："abcXYZdef",3
 * 输出："XYZdefabc"
 *
 * 要求：时间复杂度 O(n)，空间复杂度 O(n)
 */

// 解法1：数组mod
function leftRotateString(str, k) {
    const len = str.length
    k = k % n // 处理k大于数组长度的情况
    const newStr = new Array(len)
    for (let i = 0; i < len; i++) {
        newStr[i] = str[(i + k) % len] // 左旋
    }
    return newStr.join('')
}

// 解法2：数组api
function LeftRotateString(str, n) {
    // write code here
    if (!str || str.length === 0) return ''
    const array = str.split('')
    for (let i = 0; i < n; i++) {
        const left = array.shift()
        array.push(left)
    }
    return array.join('')
}

// 解法3：slice
function LeftRotateStringSlice(str, n) {
    if (!str) return ''
    const mod = n % str.length // 移动n比字符串长
    const a = str.slice(0, mod)
    return str.slice(mod).concat(a) // 获取mod之后的字符，并与前面的字符连接
}

// 解法4：substring
function LeftRotateStringSubstring(str, n) {
    if (!str) return ''
    const k = n % str.length // 实际真正循环次数
    return str.substring(k) + str.substring(0, k) // 切分字符串再合并
}

// slice(start, end)	负数表示从末尾计算	返回空字符串 ""	不修改字符串
// substring(start, end)	负数视为 0	自动交换 start 和 end	不修改字符串
