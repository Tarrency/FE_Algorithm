/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 *
 * 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// 解法1：排序，map的key存排序后结果，value存原字符串
var groupAnagrams = function(strs) {
    const map = new Map()
    for (const str of strs) {
        const sorted = str.split('').sort().join()
        // const sorted = [...str].split('').sort().join()
        if (map.has(sorted)) {
            map.get(sorted).push(str)
        } else {
            map.set(sorted, [])
        }
    }
    return [...map.values()]
    // return Array.from(map.values());
}
// 时间复杂度O(nklogk)，空间复杂度O(nk)，n 是 strs 中的字符串的数量，k 是 strs 中的字符串的的最大长度

// 解法2：计数法，每个字符串记录次数，如aab:20，作为map的key值，value值为原字符串
var groupAnagrams2 = function(strs) {
    const map = {}
    for (const s of strs) {
        const count = new Array(26).fill(0)
        for (const c of s) {
            count[c.charCodeAt() - 'a'.charCodeAt()]++
        }
        map[count] ? map[count].push(s) : map[count] = [s]
    }
    return Object.values(map)
}
// 时间复杂度O(nk)，空间复杂度O(nk)
// @lc code=end

