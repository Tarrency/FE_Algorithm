/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param proot TreeNode类
 * @return ListNode类
 *
 * 二叉搜索树与双向链表
 * 输入：{10,6,14,4,8,12,16}
 * 返回值：From left to right are:4,6,8,10,12,14,16;From right to left are:16,14,12,10,8,6,4;
 */

// 解法1：中序遍历，指定pre和当前，移动pre，注意判断第一次遍历得指定head指向
function Convert(pRootOfTree) {
    const dfs = (root) => {
        if (!root) return null
        dfs(root.left)
        if (pre) {
            // 二叉树中序遍历，左根右，如果有左说明左已经遍历过了，处理左右指向
            pre.right = root
        } else {
            // 没有说明是第一次遍历，赋值
            head = root
        }
        root.left = pre
        pre = root
        dfs(root.right)
    }
    if (!pRootOfTree) return null
    let head = null
    let pre = null
    dfs(pRootOfTree)
    // 看要求，头尾节点需不需要链接
    pre.right = head
    head.left = pre
    return head
}
// 时间复杂度：O(n)（每个节点仅访问一次）
// 空间复杂度最坏情况：O(n)（递归栈深度），平衡树情况：O(log n)。

// 解法2： 左子树入栈，到null则尾巴节点弹出，连接左右，当前指针改向弹出节点的右节点
var treeToDoublyList = function(root) {
    if (!root) return
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
