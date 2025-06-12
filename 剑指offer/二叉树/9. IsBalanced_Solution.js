/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2025-06-12 14:25:17
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2025-06-12 14:45:00
 * @FilePath: \FE_Algorithm\剑指offer\二叉树\9. IsBalanced_Solution.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 验证是否是平衡二叉树，它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。
function IsBalanced_Solution(pRoot) {
    if (!pRoot) return true
    return Math.abs(getDepth(pRoot.right) - getDepth(pRoot.left)) <= 1 && IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
}
// 平均时间复杂度：O(n log n)（平衡树情况下），类似于归并排序的递归树分析
// 最坏时间复杂度：O(n²)（树退化成链表时）

// 空间复杂度取决于树的高度，平衡树O(log n)。
// 最坏O(n)

function getDepth(pRoot) {
    if (!pRoot) return 0
    const left = getDepth(pRoot.left)
    const right = getDepth(pRoot.right)
    return Math.max(left, right) + 1
}
// 时间复杂度为 O(n)，每个节点遍历一次
// 空间复杂度取决于树的高度，最坏情况（链式树）是 O(n)，平衡树是 O(log n)
