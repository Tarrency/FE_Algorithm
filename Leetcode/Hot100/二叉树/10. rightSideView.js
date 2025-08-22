/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @param {TreeNode} root
 * @return {number[]}
 */

// 解法1：DFS，根右左，深度 = res.length
var rightSideView = function(root) {
    const res = []
    function dfs(node, depth) {
        if (!node) return
        if (depth === res.length) { // 这个深度首次遇到
            res.push(node.val)
        }
        dfs(node.right, depth + 1) // 先递归右子树，保证首次遇到的一定是最右边的节点
        dfs(node.left, depth + 1)
    }
    dfs(root, 0)
    return res
}

// 解法2：BFS，深度判断，当前queue的最后一个节点（i = len - 1）
var rightSideViewBFS = function(root) {
    if (!root) return []
    const queue = [root] // 队列 把树顶加入队列
    const res = [] // 用来存储每层最后个元素值
    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const node = queue.shift() // 取出队列第一个元素
            if (i === len - 1) res.push(node.val) // 当是 当前一层的最后一个元素时，把值加入arr
            if (node.left) queue.push(node.left) // 继续往队列添加元素
            if (node.right) queue.push(node.right)
        }
    }
    return res
}
// 时间复杂度：O(n)，空间复杂度：O(n)

// @lc code=end

