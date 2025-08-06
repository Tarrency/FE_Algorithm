/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
    // 使用Set存储所有数字，便于快速查找且去重
    const set = new Set()
    for (const num of nums) {
        set.add(num)
    }
    let maxLen = 0
    // 遍历集合中的每个数字
    for (const num of set) {
        // 只有当当前数字是序列的起点时才处理（即前一个数字不存在）
        if (!set.has(num - 1)) {
            let curNum = num
            let curLen = 1
            // 向后查找连续的数字
            while (set.has(curNum + 1)) {
                curNum += 1
                curLen += 1
            }
            // 更新最长序列长度
            maxLen = Math.max(maxLen, curLen)
        }
    }
    return maxLen
}
// 时间复杂度O(n)，空间复杂度O(n)
// @lc code=end

