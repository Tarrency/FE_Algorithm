/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 * nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 解法1：直接合并后排序
var mergeSort = function(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2)
    nums1.sort((a, b) => a - b)
}
// 时间复杂度：O((m+n)log(m+n))，空间复杂度：O(log(m+n))

// 解法2：双指针，两个数组看作队列，每次从两个数组头部取出比较小的数字放到结果中
var merge = function(nums1, m, nums2, n) {
    let p1 = 0; let p2 = 0 // 初始化两个指针
    const sorted = new Array(m + n).fill(0) // 创建结果数组
    var cur // 当前要放入的元素

    // 当至少一个数组还有元素时继续循环
    while (p1 < m || p2 < n) {
        if (p1 === m) { // 情况1：nums1 已用完，只能取 nums2
            cur = nums2[p2++]
        } else if (p2 === n) { // 情况2：nums2 已用完，只能取 nums1
            cur = nums1[p1++]
        } else if (nums1[p1] < nums2[p2]) { // 情况3：两个数组都有元素，取较小的
            cur = nums1[p1++]
        } else {
            cur = nums2[p2++] // 情况4：取 nums2 的元素（相等或更小）
        }
        sorted[p1 + p2 - 1] = cur // 关键：将当前元素放入正确位置
    }

    // 将结果复制回 nums1
    for (let i = 0; i < m + n; ++i) {
        nums1[i] = sorted[i]
    }
}
// 时间复杂度：O(m+n)，空间复杂度：O(m+n)

// 解法3：指针设置为从后向前遍历，每次取两者之中的较大者放进 nums1的最后面
var mergeBack = function(nums1, m, nums2, n) {
    let p1 = m - 1; let p2 = n - 1
    let tail = m + n - 1
    var cur
    while (p1 >= 0 || p2 >= 0) {
        if (p1 === -1) {
            cur = nums2[p2--]
        } else if (p2 === -1) {
            cur = nums1[p1--]
        } else if (nums1[p1] > nums2[p2]) {
            cur = nums1[p1--]
        } else {
            cur = nums2[p2--]
        }
        nums1[tail--] = cur
    }
}
// 时间复杂度：O(m+n)，空间复杂度：O(1)
// @lc code=end

