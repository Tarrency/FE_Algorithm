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
 * @param pRoot TreeNode类
 * @return int整型二维数组
 *
 * 把二叉树打印成多行
 * 输入：{1,2,3,#,#,4,5}
 * 返回值：[[1],[2,3],[4,5]]
 */

// 解法1：层级当索引存储当前层的结果
function Print(pRoot) {
    if (!pRoot) return []
    const res = []
    const queue = [pRoot]
    let level = 0
    while (queue.length) {
        const len = queue.length
        res.push([])
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            res[level].push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        level++
    }
    return res
}

// 解法2：临时数组存储当前层的结果
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

// 解法3：dfs，按层级（level）存储节点值
const arr = []
function PrintDFS(pRoot) {
    const arr = []
    function dfs(node, level) {
        if (!node) return
        if (!arr[level]) {
            arr[level] = []
        }
        arr[level].push(node.val)
        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }
    dfs(pRoot, 0)
    return arr
}
// 时间复杂度：O(n)，空间复杂度：O(n)

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pRoot TreeNode类
 * @return int整型二维数组
 *
 * 二叉树的锯齿形层序遍历
 * 输入：[3,9,20,null,null,15,7]
 * 返回值：[[3],[20,9],[15,7]]
 */

// 解法1：层级当索引存储当前层的结果，isOrderLeft控制方向
function zigzagLevelOrderBFS(pRoot) {
    if (!pRoot) return []
    const res = []
    const queue = [pRoot]
    let level = 0
    let isOrderLeft = true
    while (queue.length) {
        const len = queue.length
        res.push([])
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            if (isOrderLeft) {
                res[level].push(node.val)
            } else {
                res[level].unshift(node.val)
            }
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        level++
        isOrderLeft = !isOrderLeft
    }
    return res
}

// 解法2：临时数组存储当前层的结果，isOrderLeft控制方向
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
// 时间复杂度O(N)，空间复杂度O(N)。各方法均如此

