/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 * 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
 * 假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
 * 你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 解法1：二分
var findDuplicate = function(nums) {
    const n = nums.length
    let l = 1; let r = n - 1; let ans = -1
    while (l <= r) {
        const mid = (l + r) >> 1
        let cnt = 0
        for (let i = 0; i < n; ++i) {
            cnt += nums[i] <= mid
        }
        if (cnt <= mid) {
            l = mid + 1
        } else {
            r = mid - 1
            ans = mid
        }
    }
    return ans
}
// 时间复杂度：O(n log n)，空间复杂度：O(1)

// 解法2：快慢指针，转换为链表环检测
var findDuplicateSF = function(nums) {
    let slow = nums[0]; let fast = nums[nums[0]] // 先移动一次
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[nums[fast]]
    }
    slow = 0
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }
    return slow
}
// @lc code=end

