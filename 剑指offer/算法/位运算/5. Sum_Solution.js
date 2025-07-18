/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型
 * @return int整型
 *
 * 求1+2+3+...+n
 *
 * 输入：3
 * 返回值：8
 * 要求：时间复杂度O(n) ，空间复杂度O(1)
 * 不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）
 */

function Sum_Solution(n) {
    // write code here
    n && (n += Sum_Solution(n - 1)) // 用&&代替if判断n=0
    return n
}
