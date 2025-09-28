/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [2625] 扁平化嵌套数组
 */

// @lc code=start
/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

// 题1：全部扁平
var flat = function(arr) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const flated = flat(arr[i])
            res.push(...flated)
        } else {
            res.push(arr[i])
        }
    }
    return res
}
// 时间复杂度：O(k)，其中 k 是所有元素的总数（包括嵌套元素）
// 空间复杂度：O(k + n)，n 是最大深度级别，k 是所有元素的总数（包括嵌套元素）

// 题2：指定扁平层级深度
var flatN = function(arr, n) {
    if (n <= 0) return arr
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && n > 0) {
            const flated = flat(arr[i], n - 1)
            res.push(...flated)
        } else {
            res.push(arr[i])
        }
    }
    return res
}
// 时间复杂度：O(k∗n) 次递归调用，其中 k 表示每个层级平均嵌套数组的数量，n 是最大深度级别
// 空间复杂度：O(n)，每个递归调用在调用堆栈上消耗额外的空间
// @lc code=end

