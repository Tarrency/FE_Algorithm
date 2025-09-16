/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 解法1：贪心算法和二分查找
var lengthOfLIS = function(nums) {
    const res = [nums[0]]
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > res[res.length - 1]) {
            res.push(nums[i])
        } else {
            let left = 0
            let right = res.length - 1
            while (left < right) { // 循环结束时：left == right，才能赋值res[left] = nums[i]，防止left=right+1存在数组越界问题
                const mid = (right + left) >> 1
                if (res[mid] < nums[i]) {
                    left = mid + 1
                } else {
                    right = mid // 找的是第一个大于或等于nums[i]的位置，所以不-1
                }
            }
            res[left] = nums[i]
        }
    }
    return res.length
}
// 时间复杂度：O(nlogn)，空间复杂度：O(n)

// 解法2：动态规划
var lengthOfLISDP = function(nums) {
    const dp = new Array(n).fill(1) // dp[i]表示以nums[i]结尾的最长递增子序列的长度
    let res = 1
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) { // 如果当前元素大于前面的元素，可以形成更长的子序列
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        res = Math.max(res, dp[i])
    }
    return res
}
// 时间复杂度：O(n^2)，空间复杂度：O(n)
// @lc code=end

