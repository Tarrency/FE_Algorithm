/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, k) {
    let res = [-1, -1]
    if (!nums.length) return res

    function binary(nums, target) {
        let left = 0
        let right = nums.length - 1
        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return left
    }
    const left = binary(nums, k)
    const right = binary(nums, k + 0.5) - 1
    if (nums[right] === k) {
        res = [left, right]
    }
    return res
}
// var searchRange = function(nums, target) {

// };
// @lc code=end

