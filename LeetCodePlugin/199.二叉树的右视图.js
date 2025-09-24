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
var rightSideView = function(root) {
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
// @lc code=end

