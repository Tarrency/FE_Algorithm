/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型
 * @return int整型
 *
 * 二进制中1的个数
 *
 * 输入：10
 * 返回值：2
 * 要求：时间复杂度O(1) ，空间复杂度O(1)
 */

// 解法1：汉明重量
function NumberOf1(n) {
    // write code here
    let num = 0
    while (n) {
        num++
        n = n & (n - 1) // 汉明重量，可以消除最右边的1，直到 n 变为 0
    }
    return num
}
