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
 * @param o1 int整型
 * @param o2 int整型
 * @return int整型
 *
 * 在二叉树中找到两个节点的最近公共祖先
 * 给定一棵二叉树(保证非空)以及这棵树上的两个节点对应的val值 o1 和 o2，请找到 o1 和 o2 的最近公共祖先节点
 * 输入：{3,5,1,6,2,0,8,#,#,7,4},5,1
 * 返回值：3
 */

// 解法1：前序遍历+递归+两种情况判断；递归地在左右子树中查找目标节点，如果分别位于两侧则当前节点为LCA，否则返回非空子树的结果
function lowestCommonAncestor(root, o1, o2) {
    if (root == null || root.val === o1 || root.val === o2) return root
    const left = lowestCommonAncestor(root.left, o1, o2)
    const right = lowestCommonAncestor(root.right, o1, o2)
    if (left && right) return root // 如果两个节点分别位于当前节点的左右两侧，当前节点必定是它们的LCA
    return left ?? right // 如果两个节点都在同一侧，则LCA必定在该侧的子树中
}
function lowestCommonAncestorNode(root, node1, node2) {
    if (root == null || root === node1 || root === node2) return root
    const left = lowestCommonAncestorNode(root.left, node1, node2)
    const right = lowestCommonAncestorNode(root.right, node1, node2)
    if (left && right) return root
    return left ?? right
}
// 时间复杂度：O(n)，需要访问所有节点
// 空间复杂度：O(h)，h是树的高度，由递归栈深度决定

// 解法2：map以dfs方式存储子父节点映射关系，key存子节点，value存自己（父节点）；visited记录o1找父节点的路径，在路径中找到和o2找父节点路径的交叉点
// 先建立子到父的映射关系，然后从下往上追溯o1的祖先路径并标记，再追溯o2的祖先路径，第一个遇到的已标记节点即为LCA。
function lowestCommonAncestorOfNode(root, o1, o2) {
    const parentMap = new Map()
    const visited = new Set()
    const dfs = (node) => {
        if (node.left) {
            parentMap.set(node.left, node)
            dfs(node.left)
        }
        if (node.right) {
            parentMap.set(node.right, node)
            dfs(node.right)
        }
    }
    parentMap.set(root, null) // 注意：存root的父节点为空
    dfs(root)
    while (o1) {
        visited.add(o1)
        o1 = parentMap.get(o1)
    }
    while (o2) {
        if (visited.has(o2)) {
            return o2
        }
        o2 = parentMap.get(o2)
    }
    return null
}

// 时间空间复杂度：O(N)
