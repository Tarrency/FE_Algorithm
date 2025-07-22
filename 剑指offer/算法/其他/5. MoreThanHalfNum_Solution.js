/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param numbers int整型一维数组
 * @return int整型
 *
 * 数组中出现次数超过一半的数字
 *
 * 输入：[1,2,3,2,2,2,5,4,2]
 * 返回值：2
 */

// 解法1：哈希
function MoreThanHalfNum_Solution(numbers) {
    // write code here
    const map = new Map()

    // 统计每个数字出现的次数
    for (const num of numbers) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    // 检查是否有数字出现次数超过一半
    for (const num of numbers) {
        if (map.get(num) > numbers.length / 2) {
            return num
        }
    }

    return 0 // 没有找到符合条件的数字
}
// 时间复杂度 O(n)，空间复杂度 O(n)

// 解法2：排序后众数
function moreThanHalfNumSolution(numbers) {
    // 先对数组进行排序
    numbers.sort((a, b) => a - b)

    // 取中间位置的数字作为候选
    const cond = numbers[Math.floor(numbers.length / 2)]

    // 统计该候选数字的出现次数
    let cnt = 0
    for (const k of numbers) {
        if (cond === k) {
            cnt++
        }
    }

    // 检查是否超过半数
    if (cnt > numbers.length / 2) {
        return cond
    }

    return 0 // 没有找到符合条件的数字
}
// 时间复杂度 O(nlogn)，空间复杂度 O(1)

// 解法3：候选、遇到一个就是领航，不是就抵消
function moreThanHalfNumSolutionMore(numbers) {
    let cond = -1
    let cnt = 0

    // 第一遍遍历：摩尔投票过程
    for (let i = 0; i < numbers.length; i++) {
        if (cnt === 0) { // 如果没有领先者
            cond = numbers[i] // 当前数字成为候选者
            cnt++ // 票数+1
        } else {
            if (cond === numbers[i]) cnt++ // 遇到支持者
            else cnt-- // 遇到反对者
        }
    }

    // 第二遍遍历：验证候选数字是否确实超过半数
    cnt = 0
    for (const k of numbers) {
        if (cond === k) {
            cnt++
        }
    }

    if (cnt > numbers.length / 2) {
        return cond
    }

    return 0 // 没有找到符合条件的数字
}
// 时间复杂度 O(n)，空间复杂度 O(1)
