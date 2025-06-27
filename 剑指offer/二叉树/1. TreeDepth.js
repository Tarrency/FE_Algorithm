/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// 二叉树的深度
// 输入：{1,2,3,4,5,#,6,#,#,7}, 返回值：4

// 一棵树的深度等于左，右子树的深度取最大值加上根节点的 1
// 解法1：递归，后续遍历
// function TreeDepth(pRoot) {
//     if (!pRoot) return 0
//     const left = TreeDepth(pRoot.left)
//     const right = TreeDepth(pRoot.right)
//     return Math.max(left, right) + 1
// }

// 时间复杂度：O(n)
// 空间复杂度：O(h)，其中 h 是树的高度，最坏情况下为 O(n)。

// 解法2：BFS 广度遍历
// function TreeDepth(pRoot) {
//     if (!pRoot) return 0
//     const queue = []
//     let res = 0
//     queue.push(pRoot)

//     while (queue.length) {
//         const size = queue.length
//         for (let i = 0; i < size; i++) { // while(size--)
//             const node = queue.shift()
//             if (node.left) {
//                 queue.push(node.left)
//             }
//             if (node.right) {
//                 queue.push(node.right)
//             }
//         }
//         res++
//     }
//     return res
// }

// 时间复杂度：O(n)
// 空间复杂度：O(w)，w是二叉树的最大宽度（即最多一层的节点数）

// 解法3：前中后序遍历
function TreeDepth(pRoot) {
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
