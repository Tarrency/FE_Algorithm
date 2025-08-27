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

// 写法1
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
// 时间复杂度：O(n^2 × n!)，空间复杂度：O(n × n!)

// 写法2：优化版本
const permuteUsed = (nums) => {
    const res = []
    const used = {}

    function dfs(path) {
        if (path.length === nums.length) { // 个数选够了
            res.push(path.slice()) // 拷贝一份path，加入解集res
            return // 结束当前递归分支
        }
        for (const num of nums) { // for枚举出每个可选的选项
            // if (path.includes(num)) continue; // 别这么写！查找是O(n)，增加时间复杂度
            if (used[num]) continue // 使用过的，跳过
            path.push(num) // 选择当前的数，加入path
            used[num] = true // 记录一下 使用了
            dfs(path) // 基于选了当前的数，递归
            path.pop() // 上一句的递归结束，回溯，将最后选的数pop出来
            used[num] = false // 撤销这个记录
        }
    }

    dfs([]) // 递归的入口，空path传进去
    return res
}
// 时间复杂度：O(n × n!)，空间复杂度：O(n × n!)

// 写法3
const permuteUsed2 = (nums) => {
    const res = []
    const used = {}

    function dfs(path) {
        if (path.length === nums.length) {
            res.push(path) // 现在可以直接push了！
            return
        }
        for (const num of nums) {
            if (used[num]) continue
            used[num] = true
            dfs(path.concat(num)) // 创建新数组传递
            used[num] = false
        }
    }

    dfs([])
    return res
}
// 时间复杂度：O(n × n!)，空间复杂度：O(n × n!)
// @lc code=end

