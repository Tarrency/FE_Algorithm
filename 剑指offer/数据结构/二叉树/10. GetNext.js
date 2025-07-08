/* function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pNode TreeNode类
 * @return TreeNode类
 *
 * 二叉树的下一个节点
 * 输出他中序遍历的输入节点的下一个节点，结点不仅包含左右子结点，同时包含指向父结点的next指针
 * 输入：{8,6,10,5,7,9,11},8
 * 返回值：9
 */

// 解法1：中序遍历结果存储
const arr = []
function GetNext(pNode) {
    const node = pNode // 记录目标节点
    while (pNode.next) {
        pNode = pNode.next
    } // 找到根节点做中序遍历
    dfs(pNode)
    const index = arr.findIndex(item => item === node)
    return arr[index + 1]
}
function dfs(root) {
    if (!root) return
    if (root.left) dfs(root.left)
    arr.push(root)
    if (root.right) dfs(root.right)
}

// 时间复杂度为 O(n)，每个节点遍历一次
// 空间复杂度为 O(1)

// 解法2：暴力中序遍历
// 输入节点的中序遍历（左根右）下一个节点分两种情况：
// (1) 该节点有右子树，则是右子树的最下左节点
// (2) 该节点无右子树，说明是尾节点，分两种情况，左叶子和右叶子节点
// (1.a) 左叶子节点的下一个节点是他的父节点
// (1.b) 右叶子节点的下一个节点是个左节点，（一直向上）某父节点的左节点，需要判断其左节点身份
function GetNextNode(pNode) {
    if (!pNode) return null
    if (pNode.right) {
        pNode = pNode.right
        while (pNode.left) {
            pNode = pNode.left
        }
        return pNode
    } else {
        while (pNode.next) {
            if (pNode.next.left === pNode) {
                return pNode.next
            }
            pNode = pNode.next
        }
    }
    return null
}
// 时间复杂度：O(h)（h 是树的高度）
// 空间复杂度：O(1)
