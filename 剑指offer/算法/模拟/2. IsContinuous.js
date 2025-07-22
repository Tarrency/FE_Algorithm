/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param matrix int整型二维数组
 * @return bool布尔型
 *
 * 扑克牌顺子
 * 输入：[6,0,2,0,4]
 * 返回值：true
 *
 * 有重复
 * 1. A为1，J为11，Q为12，K为13，A不能视为14
 * 2. 大、小王为 0，0可以看作任意牌
 * 3. 如果给出的五张牌能组成顺子（即这五张牌是连续的）就输出true，否则就输出false。
 * 4.数据保证每组5个数字，每组最多含有4个零，数组的数取值为 [0, 13]
 */
function IsContinuous(numbers) {
    const res = [] // 用于存储非零数字
    let max = 0; let min = 14 // 初始化最大值和最小值

    for (const i of numbers) {
        if (i === 0) continue // 跳过0（癞子）

        // 更新最大值和最小值
        max = Math.max(i, max)
        min = Math.min(i, min)

        // 如果有重复的非零数字，肯定不能组成顺子
        if (res.includes(i)) return false

        res.push(i) // 将非零数字加入数组
    }

    // 判断最大值和最小值的差是否小于5
    return max - min < 5
}
// 时间复杂度O(n)，空间复杂度O(n)

function IsContinuousSort(numbers) {
    numbers.sort((a, b) => a - b) // 原地排序，O(n log n) 时间，O(1) 空间

    let zeroCount = 0 // 统计 0 的数量
    let gap = 0 // 统计空缺数量

    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === 0) {
            zeroCount++
            continue
        }

        // 检查重复非零数字
        if (numbers[i] === numbers[i + 1]) {
            return false
        }

        // 计算相邻非零数字的空缺
        gap += numbers[i + 1] - numbers[i] - 1 // 空缺数，5和2直接空缺3、4
    }

    return gap <= zeroCount // 用 0 填补空缺
}
// 时间复杂度O(nlogn)，空间复杂度O(1)，当 n 很大时，n log n 的增长速度远快于 n
