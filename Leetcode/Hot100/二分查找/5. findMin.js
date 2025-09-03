/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0
    let right = nums.length - 1
    while (left <= rght) {
        const mid = left + (right - left) >> 1
        if (nums[right] < nums[mid]) {
            left = mid + 1
        } else if (nums[right] > nums[mid]) {
            right = mid
        } else {
            right--
        }
    }
    return nums[left]
}
// @lc code=end

