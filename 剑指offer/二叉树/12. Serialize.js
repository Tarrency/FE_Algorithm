/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2025-06-19 15:39:29
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2025-06-19 18:03:24
 * @FilePath: \FE_Algorithm\剑指offer\二叉树\12. Serialize.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// 解法1：DFS
// function Serialize(pRoot) {
//     if (!pRoot) return 'X'
//     const left = Serialize(pRoot.left)
//     const right = Serialize(pRoot.right)
//     return pRoot.val + ',' + left + ',' + right
// }
// function Deserialize(s) {
//     const res = s.split(',')
//     const buildTree = (arr) => {
//         const rootVal = arr.shift()
//         if (rootVal === 'X') return null
//         const root = new TreeNode(rootVal)
//         root.left = buildTree(arr)
//         root.right = buildTree(arr)
//         return root
//     }
//     return buildTree(res)
// }

// https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof/solutions/417238/shou-hua-tu-jie-dfshe-bfsliang-chong-jie-fa-er-cha/
// 解法2：BFS
function Serialize(pRoot) {
    const res = []
    const queue = [pRoot]
    while (queue.length) {
        const node = queue.shift()
        if (node) {
            res.push(node.val)
            queue.push(node.left)
            queue.push(node.right)
        } else {
            res.push('X')
        }
    }
    return res.join(',')
}
function Deserialize(s) {
    if (s === 'X') return null
    const res = s.split(',')
    const root = new TreeNode(res[0])
    const queue = [root]
    let cursor = 1
    while (cursor < res.length) {
        const node = queue.shift()
        const leftVal = res[cursor]
        const rightVal = res[cursor + 1]
        if (leftVal !== 'X') {
            const leftNode = new TreeNode(leftVal)
            node.left = leftNode
            queue.push(leftNode)
        }
        if (rightVal !== 'X') {
            const rightNode = new TreeNode(rightVal)
            node.right = rightNode
            queue.push(rightNode)
        }
        cursor += 2
    }
    return root
}

// 方法1：DFS（深度优先搜索）
// 序列化（Serialize）
// 时间复杂度：O(n)，其中 n 是二叉树的节点数。每个节点都会被访问一次。
// 空间复杂度：O(h)，其中 h 是二叉树的高度。递归调用栈的深度取决于树的高度，最坏情况下（树退化为链表）为 O(n)，平均情况下为 O(log n)。

// 反序列化（Deserialize）
// 时间复杂度：O(n)，每个节点都会被处理一次。
// 空间复杂度：O(n)，存储分割后的字符串数组；递归调用栈的空间复杂度为 O(h)，与序列化相同。

// 方法2：BFS（广度优先搜索）
// 序列化（Serialize）
// 时间复杂度：O(n)，每个节点都会被访问一次。
// 空间复杂度：O(n)，队列中最多存储一层的节点数，最坏情况下（完全二叉树最后一层）为 O(n)。

// 反序列化（Deserialize）
// 时间复杂度：O(n)，每个节点都会被处理一次。
// 空间复杂度：O(n)，队列中最多存储一层的节点数，最坏情况下为 O(n)。
