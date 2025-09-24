/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = []
    const path = []

    candidates.sort((a, b) => a - b)
    backtrace(0, 0)
    return res

    function backtrace(inx, sum) {
        if (sum === target) {
            res.push(path.slice())
            return
        }
        for (let i = inx; i < candidates.length; i++) {
            const num = candidates[i]
            if (sum + num > target) {
                break
            }
            path.push(num)
            sum += num
            backtrace(i, sum)
            path.pop()
            sum -= num
        }
    }
}
// @lc code=end

