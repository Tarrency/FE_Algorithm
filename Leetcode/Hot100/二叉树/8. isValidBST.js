/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 * 节点的左子树只包含 严格小于 当前节点的数。
 * 节点的右子树只包含 严格大于 当前节点的数。
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
const helper = (root, lower, upper) => {
    if (root === null) {
        return true
    }
    if (root.val <= lower || root.val >= upper) {
        return false
    }
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
}
var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity)
}

// 解法2：中序遍历（栈）升序
var isValidBSTStack = function(root) {
    const stack = []
    let pre = -Infinity

    while (stack.length || root) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
        if (root.val <= pre) {
            return false
        }
        pre = root.val

        root = root.right
    }
    return true
}

// 解法3：中序遍历DFS升序
var isValidBSTDFS = function(root) {
    // let pre = Number.MIN_SAFE_INTEGER;// Number.MIN_SAFE_INTEGER常量表示JavaScript中的最小安全整数（ - （2 ^ 53 - 1））
    let pre = -Infinity
    let res = true
    dfs(root)
    return res
    function dfs(node) {
        if (node && res) {
            dfs(node.left)
            res = res && node.val > pre
            pre = node.val
            dfs(node.right)
        }
    }
}
// 时间复杂度：O(n)，空间复杂度：O(n)
// @lc code=end

