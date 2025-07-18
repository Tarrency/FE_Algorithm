/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param num1 int整型
 * @param num2 int整型
 * @return int整型
 *
 * 不用加减乘除做加法
 * 0-n
 *
 * 输入：1,2
 * 返回值：3
 * 要求：时间复杂度O(1) ，空间复杂度O(1)
 */

// 解法1：异或算不进位，与+左移算进位，直到进位为0
function Add(num1, num2) {
    // write code here
    // 先通过异或运算得到不进位数据，再通过与运算+左移位1得到进位数据，再递归以上操作直至进位值为0
    while (num2) {
        const bujinwei = num1 ^ num2
        const jinwei = (num1 & num2) << 1
        num1 = bujinwei
        num2 = jinwei
    }
    return num1
}
