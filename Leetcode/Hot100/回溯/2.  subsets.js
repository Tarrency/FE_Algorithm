/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 写法1
var subsets = function(nums) {
    const res = []
    const backtrack = (nums, index, tmp) => {
        res.push(tmp.slice())
        for (let i = index; i < nums.length; i++) {
            tmp.push(nums[i])
            backtrack(nums, i + 1, tmp)
            tmp.pop()
        }
    }
    backtrack(nums, 0, [])
    return res
}

// 写法2
var subsets2 = function(nums) {
    const arr = []
    const res = []
    const dfs = (index) => {
        if (index === nums.length) {
            res.push(arr.slice())
            return
        }
        arr.push(nums[index])
        dfs(index + 1)
        arr.pop(arr.length - 1)
        dfs(index + 1)
    }
    dfs(0)
    return res
}

// 写法3
var subsets3 = function(nums) {
    const res = []

    const dfs = (index, path) => {
        if (index === nums.length) {
            res.push(path) // 直接push，无需复制
            return
        }
        // 选择包含当前元素
        dfs(index + 1, path.concat(nums[index])) // 创建新数组
        // 选择不包含当前元素
        dfs(index + 1, path) // 传递原数组
    }

    dfs(0, []) // 从第0个元素开始，初始路径为空数组
    return res
}
// @lc code=end

