/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 * 输入：root = [1,2,3,4,5]
 * 输出：3
 * 解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。
 * 二叉树的 直径 是指树中任意两个节点之间最长路径的 长度，两节点之间路径的 长度 由它们之间边数表示
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
 * @return {number}
 */

// 写法1
var diameterOfBinaryTree = function(root) {
    let res = 0 // 正确：记录最大直径（边数）

    function dfs(node) {
        if (node === null) {
            return 0 // 正确：空节点的高度为0（边数）
        }
        const lLen = dfs(node.left) // 正确：获取左子树高度
        const rLen = dfs(node.right) // 正确：获取右子树高度
        res = Math.max(res, lLen + rLen) // 正确：更新最大直径
        return Math.max(lLen, rLen) + 1 // 正确：返回当前节点的高度
    }

    dfs(root)
    return res // 正确：返回最大直径
}

// 写法2
// 一棵树的直径，取决于左右子树最大深度之和、左子树的直径、右子树的直径的最大值
var diameterOfBinaryTree2 = function(root) {
    return root ? Math.max(maxDeep(root.left) + maxDeep(root.right),
        diameterOfBinaryTree(root.left),
        diameterOfBinaryTree(root.right))
        : 0
}

function maxDeep(root) {
    return root ? Math.max(maxDeep(root.left), maxDeep(root.right)) + 1 : 0
}
// 时间复杂度O(n)，空间复杂度O(n)
// @lc code=end

