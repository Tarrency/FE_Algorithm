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
 * @return TreeNode类
 */
// 输入：{8,6,10,5,7,9,11}
// 返回值：{8,10,6,11,9,7,5}
function Mirror(pRoot) {
    if (!pRoot) return pRoot
    pRoot.mid = pRoot.left
    pRoot.left = pRoot.right
    pRoot.right = pRoot.mid
    Mirror(pRoot.left)
    Mirror(pRoot.right)
    return pRoot
}
// 时间O(n)，空间O(h)
