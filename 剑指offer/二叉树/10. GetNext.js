/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2025-06-12 15:26:46
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2025-06-19 10:04:30
 * @FilePath: \FE_Algorithm\剑指offer\二叉树\10. GetNext.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
// 二叉树的下一个节点，输入二叉树的广度遍历，输出他中序遍历的输入节点的下一个节点
// 输入一个节点，树中的结点不仅包含左右子结点，同时包含指向父结点的next指针

// 解法1：中序遍历结果存储
// const arr = []
// function GetNext(pNode) {
//     const node = pNode // 记录目标节点
//     while (pNode.next) {
//         pNode = pNode.next
//     } // 找到根节点做中序遍历
//     dfs(pNode)
//     const index = arr.findIndex(item => item === node)
//     return arr[index + 1]
// }
// function dfs(root) {
//     if (!root) return
//     if (root.left) dfs(root.left)
//     arr.push(root)
//     if (root.right) dfs(root.right)
// }

// 时间复杂度为 O(n)，每个节点遍历一次
// 空间复杂度为 O(1)

// 解法2：暴力中序遍历
// 输入节点的下一个节点分两种情况：
// (1) 该节点有右子树，则是右子树的最下左节点
// (2) 该节点无右子树，说明是尾节点，分两种情况，左叶子和右叶子节点
// (1.a) 左叶子节点的下一个节点是他的父节点
// (1.b) 右叶子节点的下一个节点是个左节点，（一直向上）某父节点的左节点，需要判断其左节点身份
function GetNext(pNode) {
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
