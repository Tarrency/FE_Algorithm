/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 * 返回到达 n - 1 的最小跳跃次数。测试用例保证可以到达 n - 1
 * 输入: nums = [2,3,1,1,4]
 * 输出: 2
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 解法1：反向查找出发位置
var jump = function(nums) {
    let position = nums.length - 1
    let steps = 0
    while (position > 0) {
        for (let i = 0; i < position; i++) {
            if (i + nums[i] >= position) {
                position = i
                steps++
                break
            }
        }
    }
    return steps
}
// 时间复杂度：O(n2)
// 空间复杂度：O(1)

// 解法2：正向查找可到达的最大位置，贪心
var jump2 = function(nums) {
    let maxPos = 0; let end = 0; let steps = 0
    for (let i = 0; i < nums.length - 1; ++i) {
        if (maxPos >= i) {
            maxPos = Math.max(maxPos, i + nums[i])
            if (i === end) {
                end = maxPos
                ++steps
            }
        }
    }
    return steps
}
// 时间复杂度：O(n)，其中 n 是数组长度。
// 空间复杂度：O(1)。
// @lc code=end

