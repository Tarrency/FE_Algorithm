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
 * @param p int整型
 * @param q int整型
 * @return int整型
 *
 * 二叉搜索树的最近公共祖先
 * 输入：{7,1,12,0,4,11,14,#,#,3,5},1,12
 * 返回值：7
 * 和普通二叉树找公共节点的区别是：通过其特点左<根，右>根
 */

// 解法1：迭代，判断root和p和q的值的关系，移动root
function lowestCommonAncestorBST(root, p, q) {
    // if (!root) return null
    // if (p.val === q.val) return q
    while (root) {
        if (root.val > p.val && root.val > q.val) {
            // p和q都在左子树，都比root小
            root = root.left
        } else if (root.val < p.val && root.val < q.val) {
            // p和q都在右子树，都比root小
            root = root.right
        } else {
            // 分叉说明就是root
            break
        }
    }
    return root
}

// 解法2：递归
function lowestCommonAncestor(root, p, q) {
    if (!root) return
    if (root.val < p.val && root.val < q.val) {
        // 左小右大，往右移动
        return lowestCommonAncestor(root.right, p, q)
    } else if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    }
    return root
}
// 时间复杂度O(n)，空间复杂度O(n)
