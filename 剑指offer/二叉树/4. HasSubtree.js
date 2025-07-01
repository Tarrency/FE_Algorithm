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
 * @param pRoot1 TreeNode类
 * @param pRoot2 TreeNode类
 * @return TreeNode类
 *
 * 树的子结构
 * 输入：{8,8,7,9,2,#,#,#,#,4,7},{8,9,2}
 * 返回值：true
 */
function HasSubtree(pRoot1, pRoot2) {
    if (!pRoot1 || !pRoot2) return false
    return checkSameTree(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2)
}

function checkSameTree(pRoot1, pRoot2) {
    if (!pRoot2) {
        return true
    }
    if (!pRoot1) {
        return false
    }
    if (pRoot1.val !== pRoot2.val) return false
    return checkSameTree(pRoot1.left, pRoot2.left) && checkSameTree(pRoot1.right, pRoot2.right)
}
// 时间复杂度
// HasSubtree：O(n * m)，其中 n 是 pRoot1 的节点数，m 是 pRoot2 的节点数。
// checkSameTree：O(m)

// 空间复杂度
// HasSubtree：O(n)（递归深度为 pRoot1 的高度）。
// checkSameTree：O(m)（递归深度为 pRoot2 的高度）。
