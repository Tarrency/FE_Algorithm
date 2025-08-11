/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const res = []
    let temp = intervals[0]
    intervals.sort((a, b) => a[0] - b[0])
    for (const interval of intervals) {
        if (temp[1] >= interval[0]) {
            temp = [temp[0], Math.max(temp[1], intervals[0])]
        } else {
            res.push(temp)
            temp = interval
        }
    }
    res.push(temp)
    return res
}
// 时间复杂度为 O(nlogn)，空间复杂度为 O(1)
// @lc code=end

