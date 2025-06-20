/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2025-05-29 16:21:48
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2025-06-03 15:47:16
 * @FilePath: \FE_Algorithm\剑指offer\二叉树\2. KthNode.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
// 二叉搜索树的第k(小)个节点
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param proot TreeNode类
 * @param k int整型
 * @return int整型
 */
// 输入：{5,3,7,2,4,6,8},3返回值：4
function KthNode(proot, k) {
    const arr = []
    const visit = (root) => {
        if (!root) return
        visit(root.left)
        arr.push(root)
        visit(root.right)
    }
    visit(proot)
    return arr[k - 1]
}
// 时间复杂度：O(n)
// 空间复杂度：O(n)

var kthSmallest = function(root, k) {
    let ans = 0
    function dfs(node) {
        if (node === null || k === 0) {
            return
        }
        dfs(node.left) // 左
        if (--k === 0) {
            ans = node.val // 根
        }
        dfs(node.right) // 右
    }
    dfs(root)
    return ans
}
// 时间复杂度：O(n)
// 空间复杂度：O(h)

// var kthSmallest = function(root, k) {
//     function dfs(node) {
//         if (node === null) {
//             return -1; // 题目保证节点值非负，用 -1 表示没有找到
//         }
//         const leftRes = dfs(node.left);
//         if (leftRes !== -1) { // 答案在左子树中
//             return leftRes;
//         }
//         if (--k === 0) { // 答案就是当前节点
//             return node.val;
//         }
//         return dfs(node.right); // 右子树会返回答案或者 -1
//     }
//     return dfs(root);
// };
