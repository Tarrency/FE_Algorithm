/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 * 输入：nums = [1,2,3], k = 3
 * 输出：2
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 解法1：map存前缀和出现次数
var subarraySumMap = function(nums, k) {
    let res = 0
    let pre = 0
    const map = new Map()
    map.set(0, 1) // 空数组，前缀和为0，出现1次

    for (const num of nums) {
        pre += num
        if (map.has(pre - k)) {
            res += map.get(pre - k)
        }
        map.set(pre, (map.get(pre) || 0) + 1)
    }

    return res
}
// 时间复杂度为 O(n)，空间复杂度为 O(n)

// 解法2：暴力枚举
var subarraySum = function(nums, k) {
    let res = 0
    for (let start = 0; start < nums.length; ++start) {
        let sum = 0
        for (let end = start; end < nums.length; ++end) {
            sum += nums[end]
            if (sum === k) res++
        }
    }
    return res
}
// 时间复杂度：O(n²)，空间复杂度O(1)
// @lc code=end
