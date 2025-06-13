/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2025-06-12 15:26:46
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2025-06-12 16:58:02
 * @FilePath: \FE_Algorithm\剑指offer\二叉树\10. GetNext.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
// 二叉树的下一个节点
// 输入一个节点，树中的结点不仅包含左右子结点，同时包含指向父结点的next指针

const arr = []
function GetNext(pNode) {
    while (pNode.next) {
        pNode = pNode.next
    }
    const index = arr.findIndex(item => item === pNode)
    return arr[index + 1]
}
function dfs(root) {
    if (!root) return
    if (root.left) dfs(root.left)
    arr.push(root)
    if (root.right) dfs(root.right)
}
