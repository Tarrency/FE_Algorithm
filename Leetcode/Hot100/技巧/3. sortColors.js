/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类（不用sort原地排序）
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let p0 = 0; let p1 = 0
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i]
        nums[i] = 2
        if (x <= 1) {
            nums[p1++] = 1
        }
        if (x === 0) {
            nums[p0++] = 0
        }
    }
}
// @lc code=end

