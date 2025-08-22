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
 * @param proot TreeNode类
 * @return bool布尔型
 *
 * 判断是不是平衡二叉树
 * 输入：{1,2,3,4,5,6,7}
 * 返回值：true
 * 平衡二叉树是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树
 */

// 解法1：按平衡二叉树的要求递归
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
