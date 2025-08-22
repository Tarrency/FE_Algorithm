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
 * @param preOrder int整型一维数组
 * @param vinOrder int整型一维数组
 * @return TreeNode类
 *
 * 重建二叉树
 * 输入：{1,2,4,7,3,5,6,8}, {4,7,2,1,5,3,8,6}
 * 返回值：{1,2,3,4,#,5,6,#,7,#,#,8}
 * 左节点数一定是p，但有节点数不一定是p，可能是p，可能比p大，因为中序遍历的根节点前面全是左节点，就是p个节点
 */

// 解法1：找到索引+slice
function reConstructBinaryTree(preOrder, vinOrder) {
    if (!preOrder.length || !vinOrder.length) return null
    const rootVal = preOrder[0]
    const index = vinOrder.indexOf(rootVal)
    const node = new TreeNode(rootVal)
    node.left = reConstructBinaryTree(preOrder.slice(1, index + 1), vin.slice(0, index))
    node.right = reConstructBinaryTree(preOrder.slice(index + 1), vin.slice(index + 1))
    return node
}
// 时间复杂度O(n^2)
// 空间复杂度O(n^2)

// 解法2：shift掉左子树
function reConstructTree(pre, vin) {
    if (!pre.length || !vin.length) return null
    const root = new TreeNode(pre.shift())
    const index = vin.indexOf(root.val)
    root.left = reConstructTree(pre, vin.slice(0, index)) // pre 已经被 shift() 移除根节点，剩下的部分 前 index 个节点就是左子树的前序遍历。递归时，pre 会继续被 shift() 消耗，直到左子树构建完成。
    root.right = reConstructTree(pre, vin.slice(index + 1)) // 左子树的前序遍历已经被前面的递归消耗掉了，所以剩下的 pre 自然就是 右子树的前序遍历。
    return root
}
// 时间复杂度O(n^2)
// 空间复杂度O(n^2)

// 解法3：指针优化
const buildTree = (preorder, inorder) => {
    // 辅助函数，用索引范围代替 slice
    const helper = (p_start, p_end, i_start, i_end) => {
    // 递归终止条件：前序范围为空
        if (p_start > p_end) return null

        // 1. 前序的第一个节点是当前子树的根节点
        const rootVal = preorder[p_start]
        const root = new TreeNode(rootVal)

        // 2. 在中序数组中找到根节点的位置
        const mid = inorder.indexOf(rootVal)

        // 3. 计算左子树的节点数量
        const leftNum = mid - i_start

        // 4. 递归构造左子树
        root.left = helper(
            p_start + 1, // 左子树前序的起始位置（跳过根节点）
            p_start + leftNum, // 左子树前序的结束位置
            i_start, // 左子树中序的起始位置
            mid - 1 // 左子树中序的结束位置
        )

        // 5. 递归构造右子树
        root.right = helper(
            p_start + leftNum + 1, // 右子树前序的起始位置
            p_end, // 右子树前序的结束位置
            mid + 1, // 右子树中序的起始位置
            i_end // 右子树中序的结束位置
        )

        return root
    }

    // 从整个数组范围开始递归
    return helper(0, preorder.length - 1, 0, inorder.length - 1)
}
// 时间空间复杂度O(n)

// 解法4：map存储中序遍历根节点位置+指针
const buildBinaryTree = (preorder, inorder) => {
    const map = new Map()
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
    }
    const helper = (p_start, p_end, i_start, i_end) => {
        if (p_start > p_end) return null
        const rootVal = preorder[p_start] // 根节点的值
        const root = new TreeNode(rootVal) // 根节点
        const mid = map.get(rootVal) // 根节点在inorder的位置
        const leftNum = mid - i_start // 左子树的节点数
        root.left = helper(p_start + 1, p_start + leftNum, i_start, mid - 1)
        root.right = helper(p_start + leftNum + 1, p_end, mid + 1, i_end)
        return root
    }
    return helper(0, preorder.length - 1, 0, inorder.length - 1)
}
// 时间O(n), 空间O(n)

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
 * @param inorder int整型一维数组
 * @param postorder int整型一维数组
 * @return TreeNode类
 *
 * 中序和后续构造二叉树
 * 输入:{1,2,4,7,3,5,6,8}, {4,7,2,1,5,3,8,6}
 * 返回值：{1,2,3,4,#,5,6,#,7,#,#,8}
 */

// 解法1：找到索引+slice
var buildTreePost = function(inorder, postorder) {
    if (!inorder.length || !postorder.length) return null
    const rootVal = postorder[postorder.length - 1]
    const node = new TreeNode(rootVal)
    const p = inorder.indexOf(rootVal)
    // 先 right，后 left
    node.right = buildTreePost(inorder.slice(p + 1), postorder.slice(p, -1)) // 去掉最后一个元素，postorder.slice(p, postorder.length - 1)
    node.left = buildTreePost(inorder.slice(0, p), postorder.slice(0, p))
    return node
}

// 解法2：shift
var buildPostTree = function(inorder, postorder) {
    if (!inorder.length || !postorder.length) return null
    const node = new TreeNode(postorder.pop())
    const p = inorder.indexOf(node.val)
    node.right = buildPostTree(inorder.slice(p + 1), postorder.slice(p)) // 已经pop掉最末尾的根节点了
    node.left = buildPostTree(inorder.slice(0, p), postorder.slice(0, p))
    return node
}

// 解法3：指针优化
const buildBinaryPostTree = (inorder, postorder) => {
    // 辅助函数，用索引范围代替 slice
    const helper = (i_start, i_end, p_start, p_end) => {
        // 递归终止条件：中序范围为空
        if (i_start > i_end || p_start > p_end) return null

        // 1. 后序的最后一个节点是当前子树的根节点
        const rootVal = postorder[p_end]
        const root = new TreeNode(rootVal)

        // 2. 在中序数组中找到根节点的位置
        const mid = inorder.indexOf(rootVal)

        // 3. 计算左子树的节点数量
        const leftNum = mid - i_start

        // 4. 递归构造左子树
        root.left = helper(
            i_start, // 左子树中序的起始位置
            mid - 1, // 左子树中序的结束位置
            p_start, // 左子树后序的起始位置
            p_start + leftNum - 1 // 左子树后序的结束位置
        )

        // 5. 递归构造右子树
        root.right = helper(
            mid + 1, // 右子树中序的起始位置
            i_end, // 右子树中序的结束位置
            p_start + leftNum, // 右子树后序的起始位置
            p_end - 1 // 右子树后序的结束位置（跳过根节点）
        )

        return root
    }

    // 从整个数组范围开始递归
    return helper(0, inorder.length - 1, 0, postorder.length - 1)
}

// 解法4：map+指针
const buildBinaryTreePost = (inorder, postorder) => {
    const map = new Map()
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
    }

    const helper = (i_start, i_end, p_start, p_end) => {
        if (i_start > i_end || p_start > p_end) return null
        const rootVal = postorder[p_end] // 根节点的值是后序的最后一个元素
        const root = new TreeNode(rootVal)
        const mid = map.get(rootVal) // 根节点在中序中的位置
        const leftNum = mid - i_start // 左子树的节点数目

        // 递归构建左子树和右子树
        root.left = helper(i_start, mid - 1, p_start, p_start + leftNum - 1) // 取leftNum个，包括p_start自己，则下标范围是到相加后-1的
        root.right = helper(mid + 1, i_end, p_start + leftNum, p_end - 1)
        return root
    }

    return helper(0, inorder.length - 1, 0, postorder.length - 1)
}
