/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2025-06-11 09:45:49
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2025-06-12 15:20:59
 * @FilePath: \FE_Algorithm\剑指offer\二叉树\8. Convert.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// 二叉树与双向链表
// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表
function Convert(pRootOfTree) {
    const dfs = (root) => {
        if (!root) return null
        dfs(root.left)
        if (pre) {
            // 二叉树中序遍历，左右根，如果有左说明左已经遍历过了，处理左右指向
            pre.right = root
        } else {
            // 没有说明是第一次遍历，赋值
            head = root
        }
        root.left = pre
        pre = root
        dfs(root.right)
    }
    let head = null
    let pre = null
    if (!pRootOfTree) return null
    dfs(pRootOfTree)
    // 看要求，头尾节点需不需要链接
    pre.right = head
    head.left = pre
    return head
}
// 时间复杂度：O(n)（每个节点仅访问一次）
// 空间复杂度最坏情况：O(n)（递归栈深度），平衡树情况：O(log n)。

var treeToDoublyList = function(root) {
    if (!root) {
        return
    }

    const stack = []
    let node = root
    let pre = null
    let head = null
    while (stack.length || node) {
        if (node) {
            // 左子树入栈
            stack.push(node)
            node = node.left
        } else {
            // 说明是尾巴节点
            const top = stack.pop()
            if (!pre) {
                head = top
            } else {
                pre.right = top
            }
            top.left = pre
            pre = top
            // 如果是左尾巴节点就继续弹，弹到父有右
            node = top.right
        }
    }

    head.left = pre
    pre.right = head
    return head
}
//  时间复杂度：O(n),每个节点入栈和出栈各一次
// 空间复杂度：O(h)（h 是树的高度）,平均/最好情况（平衡树）：空间复杂度为 O(log n),最坏情况（链式树）：空间复杂度为 O(n)。
