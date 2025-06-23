/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2025-06-23 14:04:12
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2025-06-23 16:59:48
 * @FilePath: \FE_Algorithm\剑指offer\二叉树\15. lowestCommonAncestor.js
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
 * @param p int整型
 * @param q int整型
 * @return int整型
 */
// 解法1同解法2，只不过显式的处理了特殊情况，迭代
// function lowestCommonAncestor(root, p, q) {
//     if (!root) return null
//     if (p.val === q.val) return q
//     while (root) {
//         if (root.val > p.val && root.val > q.val) {
//             // p和q都在左子树，都比root小
//             root = root.left
//         } else if (root.val < p.val && root.val < q.val) {
//             // p和q都在右子树，都比root小
//             root = root.right
//         } else {
//             // 分叉说明就是root
//             break
//         }
//     }
//     return root
// }

// function lowestCommonAncestor(root, p, q) {
//     while (root) {
//         if (root.val > p.val && root.val > q.val) {
//             // p和q都在左子树，都比root小
//             root = root.left
//         } else if (root.val < p.val && root.val < q.val) {
//             // p和q都在右子树，都比root小
//             root = root.right
//         } else {
//             // 分叉说明就是root
//             break
//         }
//     }
//     return root
// }
// 时间复杂度O(n)，空间复杂度O(1)

// 递归
function lowestCommonAncestor(root, p, q) {
    if (!root) return root
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q)
    } else if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    }
    return root
}
// 时间复杂度O(n)，空间复杂度O(n)
