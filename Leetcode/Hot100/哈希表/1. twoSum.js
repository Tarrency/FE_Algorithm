/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(target - nums[i])) {
            map.set(nums[i], i)
        } else {
            return [map.get(target - nums[i]), i]
        }
    }
}
// 时间复杂度O(n)，空间复杂度O(n)
// @lc code=end

