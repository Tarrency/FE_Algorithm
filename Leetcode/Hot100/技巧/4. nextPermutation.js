/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length === 1) return nums// 如果长度为1，直接返回
    let i = nums.length - 2
    let j = nums.length - 1
    let k = nums.length - 1
    while (nums[i] >= nums[j] && i >= 0) { // 找到相邻两位为升序排列的nums[i],nums[j]
        i--
        j--
    }
    if (i < 0) return nums.reverse()// 如果i<0,表示从后往前，左边每一位数字都大于等于右边相邻数字，当前排列是最大值，反转数组返回最小值
    while (nums[i] >= nums[k]) { // 从右往左找到第一个比nums[i]大的数字
        k--
    }
    [nums[i], nums[k]] = [nums[k], nums[i]]// 交换
    for (let l = nums.length - 1; l > j; l--, j++) { // 从nums[j]到nums[nums.length - 1]都是降序，反转使其变成升序
        [nums[l], nums[j]] = [nums[j], nums[l]]
    }
    return nums
}
// @lc code=end

