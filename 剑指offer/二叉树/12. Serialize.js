/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pRoot TreeNode类
 * @return TreeNode类
 *
 * 序列化二叉树
 * 转化成字符串再转化回去
 * 输入：{1,2,3,#,#,6,7}
 * 返回值：{1,2,3,#,#,6,7}
 */

// 解法1：DFS+前序遍历，中序的话不知道根节点位置，后序的话
function Serialize(pRoot) {
    if (!pRoot) return 'X'
    const left = Serialize(pRoot.left)
    const right = Serialize(pRoot.right)
    return pRoot.val + ',' + left + ',' + right // 序列化用的前序，需要从后往前处理（因为根节点在最后），然后先构建右子树，再构建左子树
}
// 时间复杂度：O(n)，其中 n 是二叉树的节点数。每个节点都会被访问一次。
// 空间复杂度：O(h)，其中 h 是二叉树的高度。递归调用栈的深度取决于树的高度，最坏情况下（树退化为链表）为 O(n)，平均情况下为 O(log n)。

function Deserialize(s) {
    const res = s.split(',')
    const buildTree = (arr) => {
        const rootVal = arr.shift()
        if (rootVal === 'X') return null
        const root = new TreeNode(rootVal)
        root.left = buildTree(arr)
        root.right = buildTree(arr)
        return root
    }
    return buildTree(res)
}
// 时间复杂度：O(n)，每个节点都会被处理一次。
// 空间复杂度：O(n)，存储分割后的字符串数组；递归调用栈的空间复杂度为 O(h)，与序列化相同。

// 解法2：BFS
function SerializeBFS(pRoot) {
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
// 时间复杂度：O(n)，每个节点都会被访问一次。
// 空间复杂度：O(n)，队列中最多存储一层的节点数，最坏情况下（完全二叉树最后一层）为 O(n)。

function DeserializeBFS(s) {
    if (s === 'X') return null
    const res = s.split(',')
    const root = new TreeNode(res[0])
    const queue = [root]
    let cursor = 1 // 坐标0是root
    while (cursor < res.length) {
        const node = queue.shift()
        const leftVal = res[cursor] // BFS的queue存储规则，根，左，右
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
        cursor += 2 // 根被shift，跳过左、右
    }
    return root
}
// 时间复杂度：O(n)，每个节点都会被处理一次。
// 空间复杂度：O(n)，队列中最多存储一层的节点数，最坏情况下为 O(n)。

// https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof/solutions/417238/shou-hua-tu-jie-dfshe-bfsliang-chong-jie-fa-er-cha/
