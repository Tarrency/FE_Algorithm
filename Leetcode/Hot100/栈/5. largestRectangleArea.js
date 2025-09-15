/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0
    const stack = []
    const n = heights.length
    for (let i = 0; i <= n; i++) {
        // eslint-disable-next-line no-unmodified-loop-condition
        while (stack.length > 0 && (i === n || heights[i] < heights[stack[stack.length - 1]])) {
            const height = heights[stack.pop()]
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1
            maxArea = Math.max(maxArea, height * width)
        }
        stack.push(i)
    }
    return maxArea
}
// 思路：维护一个单调栈，遍历数组，遇到比当前栈顶大的元素就压入栈(压入的是索引)，
// 否则就取出栈顶元素进行计算：以当前栈顶元素为高度的最大矩形面积，
// 此时的高是：栈顶元素的值，宽是：当前索引 - 1 - 栈顶元素的索引，

// 最后一根柱子出栈后，发现栈为空，此时以这根柱子为最大高度的矩形面积的宽，是整个 heights 数组的长度，也就是当时的 i，因为这种情况只有在最后才会出现一次

// 时间复杂度：O(n)，空间复杂度：O(n)

// @lc code=end

