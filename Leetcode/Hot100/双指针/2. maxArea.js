/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let res = 0
    while (left < right) {
        const area = (right - left) * Math.min(height[left], height[right])
        res = Math.max(area, res)
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return res
}
// 时间复杂度为 O(n)，空间复杂度为 O(1)
// @lc code=end

