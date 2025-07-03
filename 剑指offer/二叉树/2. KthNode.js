/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param proot TreeNode类
 * @param k int整型
 * @return int整型
 *
 * 二叉搜索树的第k(小)个节点
 * 输入：{5,3,7,2,4,6,8},3
 * 返回值：4
 */
// 输入：{5,3,7,2,4,6,8},3
// 返回值：4

// 解法1：DFS
function KthNode(proot, k) {
    const arr = []
    const visit = (root) => {
        if (!root) return
        visit(root.left)
        arr.push(root)
        visit(root.right)
    }
    visit(proot)
    return arr[k - 1]
}
// 时间复杂度：O(n)
// 空间复杂度：O(n)

// 解法2：栈
function inorderTraversal(root) {
    const res = []
    const stack = []
    let cur = root
    while (stack.length || cur) {
        if (cur) {
            stack.push(cur) // 压入当前节点并继续向左
            cur = cur.left
        } else {
            cur = stack.pop() // 左子树到底，弹出并处理节点
            res.push(cur.val)
            cur = cur.right // 转向右子树
        }
    }
    return res[k - 1]
}
// 时间复杂度：O(n)
// 空间复杂度：O(n)

// 解法3：栈的另一种写法
function inorderTraversalKthNode(root) {
    const res = []
    const stack = []
    let cur = root
    while (stack.length > 0 || current) {
        // 1. 将当前节点及其所有左子节点压入栈
        while (current) {
            stack.push(current)
            current = current.left
        }
        // 2. 弹出栈顶节点（最左侧节点）
        cur = stack.pop()
        res.push(cur.val) // 访问节点值
        // 3. 转向右子树
        cur = cur.right
    }
    return res[k - 1]
}
// 时间复杂度：O(n)
// 空间复杂度：O(n)

// 解法4：遍历全部可能节点，用 k === 0 提前终止
var kthSmallest = function(root, k) {
    let ans = 0
    function dfs(node) {
        if (node === null || k === 0) {
            return
        }
        dfs(node.left) // 左
        k = k - 1
        if (k === 0) {
            ans = node.val // 根
        }
        dfs(node.right) // 右
    }
    dfs(root)
    return ans
}
// 时间复杂度：O(n)
// 空间复杂度：O(h)

// 解法5：直接返回答案
var kthSmallestNode = function(root, k) {
    function dfs(node) {
        if (node === null) {
            return -1 // 题目保证节点值非负，用 -1 表示没有找到
        }
        const leftRes = dfs(node.left)
        if (leftRes !== -1) { // 答案在左子树中
            return leftRes
        }
        if (--k === 0) { // 答案就是当前节点
            return node.val
        }
        return dfs(node.right) // 右子树会返回答案或者 -1
    }
    return dfs(root)
}
// 时间复杂度：O(n)
// 空间复杂度：O(n)
