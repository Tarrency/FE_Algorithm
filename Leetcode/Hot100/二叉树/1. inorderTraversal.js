/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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

// 解法1：递归
var inorderTraversalDFS = function(root) {
    const res = []
    const dfs = (node) => {
        if (!node) return
        if (node.left)dfs(node.left)
        res.push(node.val)
        if (node.right)dfs(node.right)
    }
    dfs(root)
    return res
}

// 解法2：栈，中序
const inorderTraversal = (root) => {
    const res = []
    const stack = []
    let curr = root

    while (curr || stack.length) {
    // 一直向左走，把所有左节点压栈
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }

        // 弹出栈顶节点（最左边的节点）
        curr = stack.pop()
        res.push(curr.val) // 访问节点

        // 转向右子树
        curr = curr.right
    }

    return res
}

// 前序
const preorderTraversalFront = (root) => {
    const res = []
    const stack = []
    let curr = root

    while (curr || stack.length) {
        while (curr) {
            res.push(curr.val) // 访问节点（前序：先访问再压栈）
            stack.push(curr)
            curr = curr.left // 继续向左
        }

        // 弹出栈顶节点
        curr = stack.pop()
        // 转向右子树
        curr = curr.right
    }

    return res
}
// @lc code=end

