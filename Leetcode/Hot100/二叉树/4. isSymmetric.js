/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */

// 解法1：递归
var isSymmetric = function(root) {
    return isMirror(root, root)
}
// 转换成对称二叉树
const isMirror = function(root1, root2) {
    if (root1 === null && root2 === null) return true
    if (root1 === null || root2 === null) return false
    if (root1.val !== root2.val) return false
    return isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left)
}
// 时间复杂度O(n)，空间复杂度O(n)

// 解法2：迭代
const check = (p, q) => {
    const stack = []
    stack.push(p)
    stack.push(q)

    while (stack.length) {
        p = stack.shift()
        q = stack.shift()

        if (!p && !q) continue
        if ((!p || !q) || (p.val !== q.val)) return false

        stack.push(p.left)
        stack.push(q.right)

        stack.push(p.right)
        stack.push(q.left)
    }
    return true
}

var isSymmetricStack = function(root) {
    return check(root, root)
}
// 时间复杂度O(n)，空间复杂度O(n)
// @lc code=end

