/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @return numbers int整型一维数组
 *
 * 二叉树的深度
 * 输入：{1,2,3,4,5,#,6,#,#,7}
 * 返回值：4
 */

// 解法1：递归，后续遍历
// 一棵树的深度等于左，右子树的深度取最大值加上根节点的 1
function TreeDepth(pRoot) {
    if (!pRoot) return 0
    const left = TreeDepth(pRoot.left)
    const right = TreeDepth(pRoot.right)
    return Math.max(left, right) + 1
}
function TreeDepthBrief(pRoot) {
    return pRoot ? Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right)) + 1 : 0
}
// 时间复杂度：O(n)
// 空间复杂度：O(h)，其中 h 是树的高度，最坏情况下为 O(n)。

// 解法2：BFS 广度遍历
function TreeDepthBFS(pRoot) {
    if (!pRoot) return 0
    const queue = []
    let res = 0
    queue.push(pRoot)

    while (queue.length) {
        const size = queue.length
        for (let i = 0; i < size; i++) { // while(size--)
            const node = queue.shift()
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        res++
    }
    return res
}

// 时间复杂度：O(n)
// 空间复杂度：O(w)，w是二叉树的最大宽度（即最多一层的节点数）

// 解法3：前中后序遍历
function TreeDepthDFS(pRoot) {
    let res = 0
    let depth = 0
    const visit = (node) => {
        if (!node) return
        depth++
        res = Math.max(res, depth)
        visit(node.left)
        // res = Math.max(res, depth)
        visit(node.right)
        // res = Math.max(res, depth)
        depth--
    }
    visit(pRoot)
    return res
}
// 时间复杂度：O(n)
// 空间复杂度：O(h)，其中 h 是树的高度，最坏情况下为 O(n)

// 解法4：从1开始，显式维护level
function maxDepthDFS(root) {
    let maxLevel = 0 // 记录最大深度
    function dfs(node, level) {
        if (!node) return
        if (level > maxLevel) maxLevel = level // 更新最大深度
        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }
    dfs(root, 1) // 根节点算第 1 层
    return maxLevel
}

// 解法5：从0开始递归，无副作用（不修改任何外部变量，仅通过参数和返回值传递数据）
function maxDepth(root, level = 0) {
    if (!root) return level
    return Math.max(
        maxDepth(root.left, level + 1),
        maxDepth(root.right, level + 1)
    )
}
