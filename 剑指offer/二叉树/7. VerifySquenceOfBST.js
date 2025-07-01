/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param postorder int一维整型数组
 * @return bool布尔型
 *
 * 二叉搜索树的后序遍历序列
 * 输入：[1,3,2]
 * 返回值：true
 * 二叉搜索树特点：左子树比根节点小，右子树比根节点大
 * 后续遍历顺序：左右根
 */

// 解法1：双指针，左指针根据规则走到最后，并划分左右子树
var VerifySquenceOfBST = function(postorder) {
    const dfs = (i, j) => {
    // 区间内只有一个值
        if (i >= j) return true
        let p = i
        while (postorder[p] < postorder[j]) p++
        const mid = p // 找到右一节点
        while (postorder[p] > postorder[j]) p++
        // p要走到最后位置  并且递归去判断左右子树都要满足二叉搜索树的性质
        return p === j && dfs(i, mid - 1) && dfs(mid, j - 1)
    }
    return dfs(0, postorder.length - 1)
}
// 空间复杂度是 O(n)。
// 时间复杂度 O(n²)，因为每次递归都需要遍历当前区间的所有元素来验证性质

// 解法2：索引找到根节点和左右子树，判断右子树节点是否都比根节点大
var verifyTreePostorder = function(postorder) {
    if (postorder.length <= 2) return true

    const root = postorder[postorder.length - 1]
    const idx = postorder.findIndex((item) => item > root) // 右子树第一个节点索引
    const left = postorder.slice(0, idx)
    const right = postorder.slice(idx, -1)
    if (Math.min(root, ...right) !== root) return false

    return verifyTreePostorder(left) && verifyTreePostorder(right)
}
// 时间复杂度：O(n²)，因为每次递归都需要遍历数组来找到分界点，并且每次递归都会创建新的数组切片
// 空间复杂度：O(n²)每次递归都会创建新的数组切片

// 解法3：pop出根节点，找到右子树，判断
var verifyPostorder = function(postorder) {
    if (postorder.length <= 2) return true
    // 这里用pop的一个好处在于最后面 postorder.slice(i) 不需要考虑根节点就可以拿到右子树了
    const root = postorder.pop()
    let i = 0
    // 找到左右子树的分界点
    while (postorder[i] < root) {
        i++
    } // 左子树最后一个节点判断完，移动到右子树第一个节点
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
// 时间复杂度：O(n²)，因为每次递归都需要遍历数组来找到分界点，并且每次递归都会创建新的数组切片
// 空间复杂度：O(n²)每次递归都会创建新的数组切片

// 解法4：
var verifyBinaryTreePostorder = function(postorder) {
    // 后续遍历的顺序是左右根   反向遍历 那就是根右左--大致
    const stack = []
    let root = Number.MAX_SAFE_INTEGER
    for (let i = postorder.length - 1; i >= 0; i--) {
    // 如果后面的元素还比根节点大，则不是正确的顺序
        if (postorder[i] > root) return false
        // 如果栈内有值并且栈顶元素比当前元素大，比当前元素大的都弹出来，最后一个弹出来的一定是后面元素（左子树）的根节点
        while (stack.length && stack[stack.length - 1] > postorder[i]) {
            root = stack.pop()
        }
        stack.push(postorder[i])
    }
    return true
}
// 时间复杂度 O(n)，空间复杂度 O(n)

// [4,6,5,9,8]
// 反向遍历模拟的是 根 -> 右 -> 左 的顺序（类似于前序遍历的变种）。 中 大 小
// stack 存储的是当前路径的右子树节点。
// root 表示当前节点的父节点约束（即当前节点的值不能超过 root）。
// 如果遇到 postorder[i] > root，说明违反了 BST 的性质（左子树 < 根 < 右子树），直接返回 false。

// 维护一个递增栈，存储可能的右子树根节点。
// 当遇到下降时（当前节点比栈顶小），说明进入了左子树，此时弹出比它大的所有节点，并记录最后一个弹出的节点作为当前子树的根。
