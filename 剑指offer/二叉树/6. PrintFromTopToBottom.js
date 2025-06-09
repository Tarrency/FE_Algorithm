/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2025-06-09 10:02:59
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2025-06-09 13:59:19
 * @FilePath: \FE_Algorithm\剑指offer\二叉树\6. PrintFromTopToBottom.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// 从上到下打印二叉树，BFS
// 输入：{8,6,10,#,#,2,1}
// 返回值：[8,6,10,2,1]
function PrintFromTopToBottom(root) {
    if (!root) return []
    const res = []
    const queue = [root]
    while (queue.length) {
        const node = queue.shift()
        res.push(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return res
}
// 时间复杂度：每个点进队出队各一次，故渐进时间复杂度为 O(n)。
// 空间复杂度：队列中元素的个数不超过 n 个，故渐进空间复杂度为 O(n)

// 二叉树的层序遍历
// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]
var levelOrder = function(root) {
    if (!root) return []
    const res = []
    const queue = [root]
    while (queue.length) {
        const len = queue.length
        const levelRes = []
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            levelRes.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        res.push(levelRes)
    }
    return res
}

// 二叉树的锯齿形层序遍历
// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[20,9],[15,7]]
var zigzagLevelOrder = function(root) {
    if (!root) return []
    const res = []
    const queue = [root]
    let isOrderLeft = true
    while (queue.length) {
        const len = queue.length
        const levelRes = []
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            if (isOrderLeft) {
                levelRes.push(node.val)
            } else {
                levelRes.unshift(node.val)
            }
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        res.push(levelRes)
        isOrderLeft = !isOrderLeft
    }
    return res
}
