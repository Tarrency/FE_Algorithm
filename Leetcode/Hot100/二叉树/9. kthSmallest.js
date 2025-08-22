/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第 K 小的元素
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
 * @param {number} k
 * @return {number}
 */

// 解法1：递归排序
var kthSmallest = function(root, k) {
    const res = []
    const dfs = (node) => {
        if (!node) return
        if (node.left) dfs(node.left)
        res.push(node.val)
        if (node.right) dfs(node.right)
    }
    dfs(root)
    return res[k - 1]
}
// 时间复杂度：O(n)
// 空间复杂度：O(n)

// 解法2：递归+提前终止
var kthSmallestDFS = function(root, k) {
    let ans = 0
    const dfs = (node) => {
        if (!node || k === 0) return
        if (node.left) dfs(node.left)
        k = k - 1
        if (k === 0) ans = node.val
        if (node.right) dfs(node.right)
    }
    dfs(root, k)
    return ans
}
// 时间复杂度：O(k) - 最多遍历 k 个节点就提前终止
// 空间复杂度：O(h) - 只需要递归调用栈，深度为树高 h

// 解法3：迭代+栈+排序
var kthSmallestStack = function(root, k) {
    const stack = []
    const res = []
    while (stack.length || root) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        res.push(root.val)
        root = root.right
    }
    return res[k - 1]
}
// 时间复杂度：O(n)
// 空间复杂度：O(n)

// 解法4：迭代+栈+提前终止
var kthSmallestStackK = function(root, k) {
    const stack = []
    let ans = 0
    while (stack.length || root) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        k--
        if (k === 0) {
            ans = root.val
            break
        }
        root = root.right
    }
    return ans
}
// 时间复杂度：O(k) - 最多遍历 k 个节点就提前终止
// 空间复杂度：O(h) - 只需要递归调用栈，深度为树高 h
// @lc code=end

