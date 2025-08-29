/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    if (digits.length === 0) return []
    const res = []
    const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' }
    // dfs: 当前构建的字符串为curStr，现在“翻译”到第i个数字，基于此继续“翻译”
    const dfs = (i, str) => { // curStr是当前字符串，i是扫描的指针
        if (i === digits.length) { // 指针越界，递归的出口
            res.push(str) // 将解推入res
            return // 结束当前递归分支
        }
        const letters = map[digits[i]] // 当前数字对应的字母
        for (const letter of letters) { // 一个字母是一个选择，对应一个递归分支
            dfs(i + 1, str + letter) // 选择翻译成letter，生成新字符串，i指针右移继续翻译（递归）
        }
    }
    dfs(0, '') // 递归的入口，初始字符串为''，从下标0开始翻译
    return res
}
// 时间复杂度：O(n × 4ⁿ)，空间复杂度：O(n)

// 写法2
const letterCombinations2 = (digits) => {
    if (digits.length === 0) return []
    const res = []
    const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' }

    const dfs = (i, path) => {
        if (i === digits.length) {
            res.push(path.join('')) // 需要拼接成字符串
            return
        }
        const letters = map[digits[i]]
        for (const letter of letters) {
            path.push(letter) // 选择
            dfs(i + 1, path) // 递归
            path.pop() // 撤销选择 ← 需要手动回溯！
        }
    }

    dfs(0, [])
    return res
}
// @lc code=end

