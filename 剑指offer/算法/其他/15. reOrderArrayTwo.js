/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param array int整型一维数组
 * @return int整型一维数组
 *
 * 调整数组顺序使奇数位于偶数前面(一)
 *
 * 数组里面可能含有相同的元素，相对位置不做要求
 *
 * 要求：时间复杂度 O(n)，空间复杂度 O(1)
 *
 * 输入：[1,2,3,4]
 * 返回值：[1,3,2,4]
 */

// 解法1：双指针交换法
function reOrderArrayTwo(array) {
    // write code here
    let left = 0; let right = array.length - 1
    while (left < right) {
        while (left < right && array[left] % 2 === 1) left++ // 移动左指针直到找到第一个偶数
        while (left < right && array[right] % 2 === 0) right-- // 移动右指针直到找到第一个奇数
        if (left < right) {
            [array[left], array[right]] = [array[right], array[left]]
            left++
            right--
        }
    }
    return array
}
