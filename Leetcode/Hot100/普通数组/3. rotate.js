/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组(向右轮转)
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
 * 输出: [5,6,7,1,2,3,4]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 解法1：数组mod
var rotate = function(nums, k) {
    const len = nums.length
    k = k % n // 处理k大于数组长度的情况
    const newArr = new Array(len)
    for (let i = 0; i < nums.length; i++) {
        // newArr[i] = nums[(i + k) % len] // 向左轮转
        newArr[(i + k) % len] = nums[i] // 向右轮转
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = newArr[i]
    }
}
// 将原数组下标为 i 的元素放至新数组下标为 (i+k)modn 的位置
// 时间复杂度为 O(n)，空间复杂度为 O(n)
// @lc code=end

