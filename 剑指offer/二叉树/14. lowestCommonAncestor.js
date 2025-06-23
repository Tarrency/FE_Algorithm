/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2025-06-20 16:41:07
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2025-06-23 15:29:34
 * @FilePath: \FE_Algorithm\剑指offer\二叉树\14. lowestCommonAncestor.js
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
 * @param root TreeNode类
 * @param o1 int整型
 * @param o2 int整型
 * @return int整型
 */
// 给定一棵二叉树(保证非空)以及这棵树上的两个节点对应的val值 o1 和 o2，请找到 o1 和 o2 的最近公共祖先节点。
// function lowestCommonAncestor(root, o1, o2) {
//     if (root == null || root.val === o1 || root.val === o2) return root
//     const left = lowestCommonAncestor(root.left, o1, o2)
//     const right = lowestCommonAncestor(root.right, o1, o2)
//     if (left && right) return root
//     return left ?? right
// }
// 时间复杂度：O(n)，需要访问所有节点
// 空间复杂度：O(h)，h是树的高度，由递归栈深度决定
function lowestCommonAncestor(root, o1, o2) {
    const parentMap = new Map()
    const visited = new Set()
    const dfs = (node) => {
        if (node.left) {
            parentMap.set(node.left, node) // 是可以直接存储节点的
            dfs(node.left)
        }
        if (node.right) {
            parentMap.set(node.right, node)
            dfs(node.right)
        }
    }
    parentMap.set(root, null)
    dfs(root)
    while (o1) {
        visited.add(o1)
        o1 = parentMap.get(o1)
    }
    while (o2) {
        if (visited.has(o2)) {
            return o2
        }
        o2 = parentMap.get(o2)
    }
    return null
}
// 时间复杂度：O(N), 空间复杂度同
