/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2025-06-19 11:14:41
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2025-06-19 15:38:48
 * @FilePath: \FE_Algorithm\剑指offer\二叉树\11. Print.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
 */
// 层序遍历分数组
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
            if (node.left)queue.push(node.left)
            if (node.right)queue.push(node.right)
        }
        level++
    }
    return res
}
// 时间空间复杂度: O(n)

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

const arr = []
function Print2(pRoot) {
    bfs(pRoot, 0)
    return arr
}
// 广度遍历 设置level记录层级，相当于数组下标存放数据
function bfs(node, level) {
    if (!node) return
    if (!arr[level]) {
        arr[level] = []
    }
    arr[level].push(node.val)
    bfs(node.left, level + 1)
    bfs(node.right, level + 1)
}
// 时间空间复杂度: O(n)
