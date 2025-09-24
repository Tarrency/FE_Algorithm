/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = []
    const backtrack = (path) => {
        if (path.length === nums.length) {
            res.push(path)
            return
        }
        for (const n of nums) {
            if (path.includes(n)) continue
            backtrack(path.concat(n))
        }
    }
    backtrack([])
    return res
}
// @lc code=end

