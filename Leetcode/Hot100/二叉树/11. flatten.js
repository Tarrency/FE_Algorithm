/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */

// 解法1：dfs
var flattenDFS = function(root) {
    let prev = null
    const dfs = (node) => {
        if (!node) return
        const left = node.left // 保存左右子树引用
        const right = node.right

        if (prev) {
            prev.right = node
        }
        node.left = null // 断开左指针
        prev = node // 更新prev为当前节点（现在它是链表的新尾部）

        dfs(left)
        dfs(right)
    }
    dfs(root)
    return root
}
// 时间复杂度：O(n)（每个节点仅访问一次）
// 空间复杂度最坏情况：O(n)（递归栈深度），平衡树情况：O(log n)。

// 解法2：栈 + 根右左
var flatten = function(root) {
    if (!root) return null
    const stack = [root]
    let prev = null
    while (stack.length) {
        const node = stack.pop()
        const left = node.left // 保存左右子树引用
        const right = node.right
        if (prev) {
            prev.right = node
        }
        node.left = null
        prev = node
        if (right) stack.push(right)
        if (left) stack.push(left)
    }

    return root
}
// @lc code=end

