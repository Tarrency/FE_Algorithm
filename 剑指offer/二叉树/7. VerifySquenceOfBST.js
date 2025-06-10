/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2025-06-09 14:30:20
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2025-06-10 18:16:14
 * @FilePath: \FE_Algorithm\剑指offer\二叉树\7. VerifySquenceOfBST.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则返回 true ,否则返回 false
// 输入：[1,3,2]
// 输出：true
function VerifySquenceOfBST(sequence) {

}

var verifyPostorder = function(postorder) {
    // 后序遍历顺序：左右根
    // 左子树比根节点小，右子树比根节点大
    if (postorder.length <= 2) return true
    // 这里用pop的一个好处在于最后面 postorder.slice(i) 不需要考虑根节点就可以拿到右子树了
    const root = postorder.pop()
    let i = 0
    // 找到左右子树的分界点
    while (postorder[i] < root) {
        i++
    }
    const rightTree = postorder.slice(i)
    // 右子树当中所有节点都应该大于root
    const rightResult = rightTree.every((item) => item > root)
    // 对左右子树递归判断。如果所有的都满足就返回true，否则返回false
    return (
        rightResult &&
    verifyPostorder(postorder.slice(0, i)) &&
    verifyPostorder(rightTree)
    )
}

// var verifyPostorder = function(postorder) {
//     // 左闭右闭区间
//     const dfs = (i, j) => {
//     // 区间内只有一个值
//         if (i >= j) return true
//         let p = i
//         // 后续遍历是左右根
//         // 前半段都是小于根节点的
//         while (postorder[p] < postorder[j]) p++
//         // 找到中间界点
//         const mid = p
//         // 后半段都是大于根节点的
//         while (postorder[p] > postorder[j]) p++
//         // p要走到最后位置  并且递归去判断左右子树都要满足二叉搜索树的性质
//         return p == j && dfs(i, mid - 1) && dfs(mid, j - 1)
//     }
//     return dfs(0, postorder.length - 1)
// }

// var verifyPostorder = function(postorder) {
//     // 后续遍历的顺序是左右根   反向遍历 那就是根右左--大致
//     const stack = []
//     let root = Number.MAX_SAFE_INTEGER
//     for (let i = postorder.length - 1; i >= 0; i--) {
//     // 如果后面的元素还比根节点大了  那肯定不是正确的顺序
//         if (postorder[i] > root) return false
//         // 如果栈内有值并且栈顶元素比当前元素大，比当前元素大的都弹出来，最后一个弹出来的一定是后面元素（左子树）的根节点
//         while (stack.length && stack[stack.length - 1] > postorder[i]) {
//             root = stack.pop()
//         }
//         stack.push(postorder[i])
//     }
//     return true
// }
// [4,6,5,9,8]
// 反向遍历模拟的是 根 -> 右 -> 左 的顺序（类似于前序遍历的变种）。
// stack 存储的是当前路径的右子树节点。
// root 表示当前节点的父节点约束（即当前节点的值不能超过 root）。
// 如果遇到 postorder[i] > root，说明违反了 BST 的性质（左子树 < 根 < 右子树），直接返回 false。
