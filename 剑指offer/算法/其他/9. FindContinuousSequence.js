/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param index int整型
 * @return int[][]整型二维数组
 *
 * 和为S的连续正数序列
 *
 * 输入：9
 * 输出：[[2,3,4],[4,5]]
 *
 * 要求：时间复杂度 O(n)
 */

// 解法1：双指针
function FindContinuousSequence(sum) {
    // write code here
    const res = []
    let i = 1
    let j = 2
    while (i < j) {
        const tmp = (i + j) * (j - i + 1) / 2
        if (tmp === sum) {
            const tmpArray = []
            for (let q = i; q <= j; q++) {
                tmpArray.push(q)
            }
            res.push(tmpArray)
            i++
        } else if (tmp < sum) {
            j++
        } else {
            i++
        }
    }
    return res
}

// 初始化：使用两个指针 i 和 j，初始时 i=1，j=2，表示从数字1和2开始的最小连续序列。
// 循环条件：i < j 确保序列至少包含两个数字（因为单数字序列没有意义）
// 计算当前序列和：
// 使用等差数列求和公式 (i+j)*(j-i+1)/2 计算从i到j的连续序列的和
// 这个公式来源于等差数列求和：和 = (首项 + 末项) × 项数 ÷ 2
// 三种情况处理：
// 和等于目标值：将当前序列保存到结果中，然后移动左指针 i++ 寻找其他可能的序列
// 和小于目标值：移动右指针 j++ 扩大序列以增加和
// 和大于目标值：移动左指针 i++ 缩小序列以减少和
