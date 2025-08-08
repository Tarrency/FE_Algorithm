/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 * 输入: s = "cbaebabacd", p = "abc"
 * 输出: [0,6]
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// 解法1：定长滑窗
var findAnagrams = function(s, p) {
    const ans = []
    const cntP = new Array(26).fill(0) // 统计 p 的每种字母的出现次数
    const cntS = new Array(26).fill(0) // 统计 s 的长为 len(p) 的子串 s' 的每种字母的出现次数
    for (const c of p) {
        cntP[c.charCodeAt() - 'a'.charCodeAt()]++ // 统计 p 的字母
    }
    for (let right = 0; right < s.length; right++) {
        cntS[s[right].charCodeAt() - 'a'.charCodeAt()]++ // 右端点字母进入窗口
        const left = right - p.length + 1
        if (left < 0) { // 窗口长度不足 len(p)
            continue
        }
        if (_.isEqual(cntS, cntP)) { // s' 和 p 的每种字母的出现次数都相同
            ans.push(left) // s' 左端点下标加入答案
        }
        cntS[s[left].charCodeAt() - 'a'.charCodeAt()]-- // 左端点字母离开窗口
    }
    return ans
}
// 在字符串 s 中构造一个长度为与字符串 p 的长度相同的滑动窗口，并在滑动中维护窗口中每种字母的数量；当窗口中每种字母的数量与字符串 p 中每种字母的数量相同时，则说明当前窗口为字符串 p 的异位词
// 时间复杂度：O(n)，空间复杂度O(1)

// 解法2：定长滑窗+map
var findAnagramsMap = function(s, p) {
    const res = []
    const map = new Map()

    for (const P of p) {
        map.set(P, (map.get(P) || 0) + 1)
    }

    let left = 0
    let right = 0
    let mapLen = map.size

    while (right < s.length) {
        const rightS = s[right]
        if (map.has(rightS)) {
            map.set(rightS, map.get(rightS) - 1)
            if (map.get(rightS) === 0) {
                mapLen--
            }
        }
        right++

        while (mapLen === 0) { // 窗口完全覆盖p的所有字符
            if (right - left === p.length) {
                res.push(left)
            }
            const leftS = s[left]
            if (map.has(leftS)) {
                map.set(leftS, map.get(leftS) + 1)
                if (map.get(leftS) === 1) {
                    mapLen++
                }
            }
            left++
        }
    }
    return res
}
// 时间复杂度：O(n)，空间复杂度O(1)
//
// map 存储的是 「当前窗口还欠缺多少字符才能匹配 p」,count === 0 保证窗口中的字符覆盖 p 的所有字符,right - left === k 保证窗口长度严格等于 p.length，避免冗余字符
// @lc code=end

