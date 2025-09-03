/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // nums1长度比nums2小
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]
    }

    const m = nums1.length
    const n = nums2.length
    // 在0～m中查找
    let left = 0
    let right = m

    // median1：前一部分的最大值
    // median2：后一部分的最小值
    let median1 = 0
    let median2 = 0

    while (left <= right) {
        // 前一部分包含 nums1[0 .. i-1] 和 nums2[0 .. j-1]
        // 后一部分包含 nums1[i .. m-1] 和 nums2[j .. n-1]
        const i = left + Math.floor((right - left) / 2)
        const j = Math.floor((m + n + 1) / 2) - i

        const maxLeft1 = i === 0 ? -Infinity : nums1[i - 1]
        const minRight1 = i === m ? Infinity : nums1[i]

        const maxLeft2 = j === 0 ? -Infinity : nums2[j - 1]
        const minRight2 = j === n ? Infinity : nums2[j]

        if (maxLeft1 <= minRight2) {
            median1 = Math.max(maxLeft1, maxLeft2)
            median2 = Math.min(minRight1, minRight2)
            left = i + 1
        } else {
            right = i - 1
        }
    }
    return (m + n) % 2 === 0 ? (median1 + median2) / 2 : median1
}

// @lc code=end

