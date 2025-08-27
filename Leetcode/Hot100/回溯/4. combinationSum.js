/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 * 输入：candidates = [2,3,6,7], target = 7
 * 输出：[[2,2,3],[7]]
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ans = []
    const dfs = (target, combine, idx) => {
        if (idx === candidates.length) {
            return
        }
        if (target === 0) {
            ans.push(combine)
            return
        }
        // 直接跳过
        dfs(target, combine, idx + 1)
        // 选择当前数
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx)
        }
    }

    dfs(target, [], 0)
    return ans
}

var combinationSum2 = function(candidates, target) {
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

var combinationSum3 = function(candidates, target) {
    const res = []
    candidates.sort((a, b) => a - b) // 数字排序

    const backtrace = (inx, sum, path) => {
        if (sum === target) {
            res.push(path)
            return
        }

        for (let i = inx; i < candidates.length; i++) {
            const num = candidates[i]
            if (sum + num > target) {
                break
            }
            backtrace(i, sum + num, path.concat(num))
        }
    }

    backtrace(0, 0, [])
    return res
}
// @lc code=end

