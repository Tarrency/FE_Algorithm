/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param index int整型
 * @return int[][]整型二维数组
 *
 * 和为S的两个数字
 *
 * 数组有序
 * 输入：[1,2,4,7,11,15],15
 * 输出：[4,11]
 *
 * 要求：时间复杂度 O(n)
 */

// 解法1：双指针
function FindNumbersWithSum(array, sum) {
    // write code here
    let left = 0
    let right = array.length - 1
    while (left < right) {
        const sum = array[left] + array[right]
        if (sum === target) {
            return [array[left], array[right]] // 返回数字对
        } else if (sum < target) {
            left++ // 和太小，左指针右移
        } else {
            right-- // 和太大，右指针左移
        }
    }
    return [] // 无解
}
