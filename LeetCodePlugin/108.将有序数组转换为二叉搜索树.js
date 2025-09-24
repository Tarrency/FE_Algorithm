/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // 把 nums[left] 到 nums[right-1] 转成平衡二叉搜索树
    function dfs(left, right) {
        if (left === right) {
            return null
        }
        const m = Math.floor((left + right) / 2)
        return new TreeNode(nums[m], dfs(left, m), dfs(m + 1, right))
    }
    return dfs(0, nums.length)
}
const buildBST = (nums, start, end) => {
    if (start > end) { // 构成不了区间，返回null
        return null
    }

    const midIndex = (start + end) >>> 1 // 求中间索引（索引永远取正，>>>等同于Math.floor且为正数）
    const root = new TreeNode(nums[midIndex]) // 构建当前节点

    root.left = buildBST(nums, start, midIndex - 1) // 构建左子树
    root.right = buildBST(nums, midIndex + 1, end) // 构建右子树

    return root
}

var sortedArrayToBST2 = function(nums) {
    return buildBST(nums, 0, nums.length - 1) // 递归的入口
}

// @lc code=end

