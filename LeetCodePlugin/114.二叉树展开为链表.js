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
// 时间复杂度：O(n)（每个节点仅访问一次）
// 空间复杂度最坏情况：O(n)（递归栈深度），平衡树情况：O(log n)。
// @lc code=end

