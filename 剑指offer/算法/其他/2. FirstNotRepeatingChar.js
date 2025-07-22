/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param str string字符串
 * @return int整型
 *
 * 第一个只出现一次的字符
 *
 * 输入："google"
 * 返回值：4
 */

// 解法1：哈希表
function FirstNotRepeatingChar(str) {
    // write code here
    const map = new Map()
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        map.set(char, (map.get(char) || 0) + 1)
    }
    for (let i = 0; i < str.length; i++) {
        if (map.get(str[i]) === 1) {
            return i
        }
    }
    return -1
}
