function HasSubtree(pRoot1, pRoot2) {
    if (!pRoot1 || !pRoot2) return false
    return checkSameTree(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2)
}

function checkSameTree(pRoot1, pRoot2) {
    if (!pRoot2) {
        return true
    }
    if (!pRoot1) {
        return false
    }
    return checkSameTree(pRoot1.left, pRoot2.left) && checkSameTree(pRoot1.right, pRoot2.right)
}
// 时间复杂度
// HasSubtree：O(n * m)，其中 n 是 pRoot1 的节点数，m 是 pRoot2 的节点数。
// checkSameTree：O(m)

// 空间复杂度
// HasSubtree：O(n)（递归深度为 pRoot1 的高度）。
// checkSameTree：O(m)（递归深度为 pRoot2 的高度）。
