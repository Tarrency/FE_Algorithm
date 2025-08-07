/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

// 解法1：双指针
var trap = function(height) {
    let res = 0
    let left = 0
    let right = height.length - 1
    let leftMax = 0 // 实体柱高度最大值
    let rightMax = 0
    while (left < right) {
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])
        if (height[left] < height[right]) {
            res += leftMax - height[left]
            left++
        } else {
            res += rightMax - height[right]
            right--
        }
    }
    return res
}
// 时间复杂度为 O(n)，空间复杂度为 O(1)
// 注意到下标 i 处能接的雨水量由 leftMax[i] 和 rightMax[i] 中的最小值决定。由于数组 leftMax 是从左往右计算，数组 rightMax 是从右往左计算，因此可以使用双指针和两个变量代替两个数组。

// 解法2：动态规划
var trapDP = function(height) {
    const len = height.length
    if (len === 0) {
        return 0
    }
    // 从左到右记录当前位置以前（左）的高度最大值
    const leftMax = new Array(n).fill(0)
    leftMax[0] = height[0]
    for (let i = 1; i < n; ++i) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i])
    }

    // 从右到左记录当前位置以前（右）的高度最大值
    const rightMax = new Array(n).fill(0)
    rightMax[n - 1] = height[n - 1]
    for (let i = n - 2; i >= 0; --i) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i])
    }

    // 最小最大高度 - 当前高度
    let res = 0
    for (let i = 0; i < n; ++i) {
        res += Math.min(leftMax[i], rightMax[i]) - height[i]
    }
    return res
}
// 时间复杂度为 O(n)，空间复杂度为 O(n)
// 对于数组 height 中的每个元素，分别向左和向右扫描并记录左边和右边的最大高度，然后计算每个下标位置能接的雨水量

// 解法3：单调栈
var trapStack = function(height) {
    let ans = 0
    const stack = []
    const n = height.length
    for (let i = 0; i < n; ++i) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const top = stack.pop()
            if (!stack.length) {
                break
            }
            const left = stack[stack.length - 1]
            const currWidth = i - left - 1
            const currHeight = Math.min(height[left], height[i]) - height[top]
            ans += currWidth * currHeight
        }
        stack.push(i)
    }
    return ans
}
// 时间复杂度为 O(n)，空间复杂度为 O(n)
// 从左到右遍历数组，遍历到下标 i 时，如果栈内至少有两个元素，记栈顶元素为 top，top 的下面一个元素是 left，则一定有 height[left]≥height[top]。如果 height[i]>height[top]，则得到一个可以接雨水的区域，该区域的宽度是 i−left−1，高度是 min(height[left],height[i])−height[top]，根据宽度和高度即可计算得到该区域能接的雨水量。
// @lc code=end
