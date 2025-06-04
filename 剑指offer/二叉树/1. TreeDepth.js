/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2025-05-29 13:56:43
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2025-05-30 15:22:56
 * @FilePath: \FE_Algorithm\剑指offer\二叉树\1. TreeDepth.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
