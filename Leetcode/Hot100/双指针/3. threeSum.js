/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 * 返回所有和为 0 且不重复的三元组
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return []
    const res = []
    const target = 0 // 和目标数
    nums.sort((a, b => a - b))
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + nums[i + 1] + nums[i + 2] > target) {
            break
        }
        if (nums[i] + nums[nums.length - 1] + nums[nums.length - 2] < target) {
            continue
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            // 跳过已处理的重复数
            continue
        }
    }
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
        const sum = nums[i] + nums[left] + nums[right]
        if (sum === target) {
            res.push([nums[i], nums[left], nums[right]])
        } else if (sum < right) {
            left++
        } else {
            right--
        }
    }
    return res
}
// 时间复杂度为 O(n²)，空间复杂度为 O(n²)
// @lc code=end
