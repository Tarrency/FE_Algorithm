/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 * 同一字母最多出现在一个片段中
 * 输入：s = "ababcbacadefegdehijhklij"
 * 输出：[9,7,8]
 * 划分结果为 "ababcbaca"、"defegde"、"hijhklij"
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const lastOccur = {} // 记录每个字符最后出现的位置
    for (let i = 0; i < s.length; i++) {
        lastOccur[s[i]] = i
    }
    const res = []
    let start = 0 // 标记当前片段的起始和结束位置的指针
    let end = 0
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastOccur[s[i]]) // 更新当前片段的结束位置
        if (i === end) {
            res.push(end - start + 1)
            start = end + 1 // 更新下一个片段的起始位置
        }
    }
    return res
}
// 时间复杂度：O(n)，空间复杂度：O(k)，k是字符集大小
// @lc code=end

