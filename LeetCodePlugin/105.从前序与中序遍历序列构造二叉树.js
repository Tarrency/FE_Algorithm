/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null
    const rootVal = preorder[0]
    const rootIndex = inorder.indexOf(rootVal)
    const node = new TreeNode(rootVal)
    node.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex))
    node.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1))
    return node
}
// @lc code=end

