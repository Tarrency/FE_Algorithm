/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @return int整型一维数组
 *
 * 数组中只出现一次的两个数字
 *
 * 输入：[1,4,1,6]
 * 返回值：[4,6]
 * 要求：时间复杂度O(n) ，空间复杂度O(1)
 */

// 解法1：map
function FindNumsAppearOnce(nums) {
    const freqMap = new Map()

    // Step 1: 统计每个数字的出现次数
    for (const num of nums) {
        if (freqMap.has(num)) {
            freqMap.set(num, freqMap.get(num) + 1)
        } else {
            freqMap.set(num, 1)
        }
    }

    // Step 2: 找出出现次数为 1 的数字
    const result = []
    for (const [num, count] of freqMap) {
        if (count === 1) {
            result.push(num)
        }
        if (result.length === 2) {
            break // 提前终止，已经找到两个数字
        }
    }

    return result
}
// 时间复杂度O(n)，空间复杂度O(n)

// 解法2：异或
function findTwoNumbers(nums) {
    // Step 1: 计算所有数字的异或结果（即 x ^ y）
    let xor = 0
    for (const num of nums) {
        xor ^= num // 重复元素异或得0，剩下的是两个数字的异或值
    }

    // Step 2: 找到 xor 中最低位的 1（用于分组）
    let mask = 1
    while ((xor & mask) === 0) {
        mask <<= 1
    }

    // Step 3: 分组异或，确保两个数字在不同组
    let x = 0; let y = 0
    for (const num of nums) {
        if ((num & mask) === 0) {
            x ^= num // 分组 1，重复元素异或得0，剩下的是一个数字的异或值
        } else {
            y ^= num // 分组 2，重复元素异或得0，剩下的是一个数字的异或值
        }
    }

    return [x, y]
}
// 时间复杂度O(n) ，空间复杂度O(1)
