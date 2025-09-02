/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 * 输入：nums = [4,5,6,7,0,1,2], target = 0
 * 输出：4
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 写法1:左右两段必有一段有序
function search(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)

        if (nums[mid] === target) {
            return mid
        }

        if (nums[0] <= nums[mid]) { // 如果左半部分是有序数组
            if (nums[0] <= target && target < nums[mid]) {
                right = mid - 1// 在有序数组边界范围内，进一步缩小目标值可能存在的边界范围
            } else left = mid + 1// 不在有序数组边界范围内，直接判断另一部分数组
        } else { // 如果右半部分是有序数组
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }

    return -1
};

// @lc code=end

