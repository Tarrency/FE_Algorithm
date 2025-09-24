/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 * 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
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
 * @param {number} targetSum
 * @return {number}
 */
let res = 0
var pathSum = function(root, targetSum) {
    if (!root) return 0
    pathSumRoad(root, targetSum)
    pathSum(root.left, targetSum)
    pathSum(root.right, targetSum)
    return res
}

var pathSumRoad = function(root, targetSum) {
    if (!root) return
    targetSum = targetSum - root.val
    if (targetSum === 0) res++
    pathSumRoad(root.left, targetSum)
    pathSumRoad(root.right, targetSum)
}
// @lc code=end

