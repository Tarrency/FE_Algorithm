/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const n = nums.length - 1 // 下标最大值
    let maxLen = 0
    for (let i = 0; i <= maxLen; i++) { // 注意这里是maxLen，在maxLen范围的位置内找到更远的跳跃位置
        maxLen = Math.max(maxLen, nums[i] + i)// 更新maxLen
        if (maxLen >= n) return true// 如果这个位置正好在最后一个下标或超过最后一个下标，那么一定能到达最后一个下标
    }
    return false
}
// @lc code=end

