/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 * 输入：nums = [7,8,9,11,12]
 * 输出：1
 * 要求：时间复杂度：O(n)，空间复杂度O(1)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 解法
const firstMissingPositive = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        while (
            nums[i] >= 1 &&
            nums[i] <= nums.length && // 对1~nums.length范围内的元素进行安排
            nums[nums[i] - 1] !== nums[i] // 已经出现在理想位置的，就不用交换
        ) {
            const temp = nums[nums[i] - 1] // 交换
            nums[nums[i] - 1] = nums[i]
            nums[i] = temp
        }
    }
    // 现在期待的是 [1,2,3,...]，如果遍历到不是放着该放的元素
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }
    return nums.length + 1 // 发现元素 1~nums.length 占满了数组，一个没缺
}
// @lc code=end

