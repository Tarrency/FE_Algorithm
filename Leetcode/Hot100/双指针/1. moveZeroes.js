/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 解法1：改为栈，单指针移动
var moveZeroes = function(nums) {
    let cur = 0
    for (const num of nums) {
        if (num !== 0) {
            nums[cur++] = num
        }
    }
    nums.fill(0, cur) // 从cur开始填充0
}
// 时间复杂度为 O(n)，空间复杂度为 O(1)

// 解法2：双指针，交换0和非0元素位置
var moveZeroe = function(nums) {
    let curZ = 0 // 元素为0的下标
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[curZ]] = [nums[curZ], nums[i]]
            curZ++
        }
    }
}
// 时间复杂度为 O(n)，空间复杂度为 O(1)
// @lc code=end

