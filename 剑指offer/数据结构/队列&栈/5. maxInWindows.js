/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param num int整型一维数组
 * @param size int整型
 * @return int整型一维数组
 *
 * 滑动窗口的最大值
 * 输入：[2,3,4,2,6,2,5,1],3
 * 返回值：[4,4,6,6,6,5]
 */

// 解法1：暴力，滑动窗口
// 设置两个指针i和j，i指向0，j指向size-1，取出i到j之间几个数放进临时数组，用求得最大值，然后i++，j++，直到j===len-1
function maxInWindows(num, size) {
    const len = num.length
    if (size > len || size === 0) { return [] }
    let i = 0
    let j = size - 1
    const resArr = []
    while (j < len) {
        const temp = num.slice(i, j + 1)
        resArr.push(Math.max(...temp))
        i++
        j++
    }
    return resArr
}
// 时间复杂度 O(n²)，空间复杂度O(1)

// 解法2：单调队列
// 解法3：堆（优先队列）
