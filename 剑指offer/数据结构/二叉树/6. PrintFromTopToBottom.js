/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param root TreeNode类
 * @return int整型一维数组
 *
 * 从上到下打印二叉树
 * 输入：{8,6,10,#,#,2,1}
 * 返回值：[8,6,10,2,1]
 */

// 解法1：BFS
function PrintFromTopToBottom(root) {
    if (!root) return []
    const res = []
    const queue = [root]
    while (queue.length) {
        const node = queue.shift()
        res.push(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return res
}
// 时间复杂度O(n)：每个点进队出队各一次
// 空间复杂度：O(n)，队列中元素的个数不超过 n 个
