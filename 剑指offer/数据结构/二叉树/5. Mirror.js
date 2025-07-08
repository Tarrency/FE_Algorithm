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
 *
 * 二叉树的镜像
 * 输入：{8,6,10,5,7,9,11}
 * 返回值：{8,10,6,11,9,7,5}
 */

// 解法1：临时变量交换，前序遍历风格
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

// 解法2：赋值解构交换，前序遍历风格
function MirrorTree(pRoot) {
    if (!pRoot) {
        return pRoot
    }
    [pRoot.left, pRoot.right] = [pRoot.right, pRoot.left]
    MirrorTree(pRoot.left)
    MirrorTree(pRoot.right)
    return pRoot
}
// 时间复杂度：O(N)，其中 N 为二叉树节点的数目。我们会遍历二叉树中的每一个节点，对每个节点而言，我们在常数时间内交换其两棵子树。
// 空间复杂度：O(N)。使用的空间由递归栈的深度决定，它等于当前节点在二叉树中的高度。在平均情况下，二叉树的高度与节点个数为对数关系，即 O(logN)。而在最坏情况下，树形成链状，空间复杂度为 O(N)。

// 解法3：递归回溯时交换左右子树，后序遍历风格
// 注意：必须先缓存 left 和 right，再交换，否则会破坏原始结构
function MirrorBinaryTree(pRoot) {
    if (!pRoot) {
        return pRoot
    }
    const left = MirrorBinaryTree(pRoot.left)
    const right = MirrorBinaryTree(pRoot.right)
    pRoot.right = left
    pRoot.left = right
    return pRoot
}
