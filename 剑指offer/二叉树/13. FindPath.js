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
 *
 * 二叉树中和为某一值的路径(三)
 * 给定一个二叉树root和一个整数值 sum ，求该树有多少路径的的节点值之和等于 sum
 *
 * 输入：{1,2,3,4,5,4,3,#,#,-1},6
 * 返回值：3
 */

// 解法1：前序遍历所有节点，前序遍历找和
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

// 最坏时间复杂度：O(n²)（树退化为链表），FindPath 遍历所有节点（O(n)），对每个节点调用 FindPathSum（最坏 O(n)），相乘得O(n²)
// 平均时间复杂度：O(n log n)（平衡二叉树）

// 空间复杂度：O(n)
