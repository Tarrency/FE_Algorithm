/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2025-06-20 09:45:30
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2025-06-20 16:40:08
 * @FilePath: \FE_Algorithm\剑指offer\二叉树\13. FindPath.js
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
 * @param sum int整型
 * @return int整型
 */
// 给定一个二叉树root和一个整数值 sum ，求该树有多少路径的的节点值之和等于 sum
// 输入：{1,2,3,4,5,4,3,#,#,-1},6;
let res = 0
function FindPath(root, sum) {
    if (!root) return 0
    FindPathSum(root, sum)
    FindPath(root.left, sum)
    FindPath(root.right, sum)
    return res
}

function FindPathSum(root, sum) {
    if (!root) return
    sum -= root.val
    if (sum === 0) { res++ }
    FindPathSum(root.left, sum)
    FindPathSum(root.right, sum)
    return
}
// FindPath用于遍历到所有节点，以当前节点开始找路径
// FindPathSum用于遍历该节点下的所有节点用于查找路径有几条

// 最坏时间复杂度：O(n²)（树退化为链表）。
// 平均时间复杂度：O(n log n)（平衡二叉树）
