/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 * 给你一个只包含正整数的非空数组nums。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 解法1：dfs
function canPartitionDFS(nums) {
    const total = nums.reduce((sum, num) => sum + num, 0)

    // 如果总和为奇数，不可能平分
    if (total % 2 !== 0) return false

    const target = total / 2

    // 回溯函数
    function dfs(start, curSum) {
        // 找到满足条件的子集
        if (curSum === target) return true
        // 超过目标值或已遍历完所有数字
        if (curSum > target || start >= nums.length) return false

        // 尝试包含当前数字
        if (dfs(start + 1, curSum + nums[start])) return true

        // 尝试不包含当前数字
        if (dfs(start + 1, curSum)) return true

        return false
    }

    return dfs(0, 0)
}

// 解法2：set
function canPartition(nums) {
    // 1. 计算数组所有元素的总和
    const total = nums.reduce((sum, num) => sum + num, 0)

    // 2. 如果总和是奇数，直接返回false（无法平分）
    if (total % 2 !== 0) return false

    // 3. 计算目标值（总和的一半）
    const target = total / 2

    // 4. 初始化一个Set，存储所有可能的子集和，初始包含0（空集的和）
    const possibleSums = new Set([0])

    // 5. 遍历数组中的每个数字
    for (const num of nums) {
        const newSums = new Set() // 临时存储新产生的和

        // 6. 遍历当前所有可能的和
        for (const sum of possibleSums) {
            const newSum = sum + num // 当前和加上新数字

            // 7. 如果正好等于目标值，找到解，返回true
            if (newSum === target) return true

            // 8. 如果小于目标值，添加到新和的集合中
            if (newSum < target) {
                newSums.add(newSum)
            }
        }

        // 9. 将新产生的和合并到主集合中
        for (const sum of newSums) {
            possibleSums.add(sum)
        }
    }

    // 10. 遍历完所有数字都没找到解，返回false
    return false
}
// 时间复杂度：O(n × target)，空间复杂度：O(target)

// 解法3：DP
function canPartitionDP(nums) {
    // 1. 计算总和
    const total = nums.reduce((a, b) => a + b, 0)

    // 2. 如果总和是奇数，直接返回false
    if (total % 2 !== 0) return false

    // 3. 目标值是总和的一半
    const target = total / 2

    // 4. 创建dp数组，dp[j]表示能否凑出和为j
    //    初始化：dp[0] = true（和为0总是可以，即空集）
    const dp = new Array(target + 1).fill(false)
    dp[0] = true

    // 5. 遍历每个数字
    for (const num of nums) {
        // 6. 从后往前遍历（避免重复使用同一个数字）
        for (let j = target; j >= num; j--) {
            // 7. 状态转移方程：
            //    当前能凑出和j = 之前就能凑出j 或者 用当前数字+之前能凑出(j-num)
            dp[j] = dp[j] || dp[j - num]
        }
    }

    // 8. 返回是否能凑出目标值
    return dp[target]
}
// 时间复杂度：O(n × target)，空间复杂度：O(target)
// @lc code=end

