/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return int整型
 *
 * 最长不含重复字符的子字符串
 *
 * 输入："abcabcbb" "pwwkew"
 * 返回值：3
 */

// 解法1：滑动窗口思想，用队列实现
function lengthOfLongestSubstring(str) {
    // write code here
    let res = 0
    const queue = []
    for (const s of str) {
        // 重复字符可能不在队列的头部，必用while删
        while (queue.includes(s)) {
            queue.shift()
        }
        queue.push(s)
        res = Math.max(queue.length, res)
    }
    return res
}
// 时间复杂度：O(n²)，空间复杂度O(n)

// 解法2：滑动窗口思想，用双指针+map实现
function lengthOfLongestSubstringMap(str) {
    // write code here
    let res = 0
    let start = 0
    const map = new Map()
    for (let i = 0; i < str.length; i++) {
        // map.get(str[i] > start)是因为“abba”到第二个b时更新map[b]=2但不更新map[a]=0，到第二个a时需要把第一个a（已不在窗口）移除
        if (map.has(str[i]) && map.get(str[i] > start)) {
            start = map.get(str[i]) + 1
        }
        // while (map.has(str[i])) {
        //     map.delete(str[start])
        //     start++
        // }
        map.set(str[i], i)
        res = Math.max(i - start + 1, res)
    }
    return res
}
// 时间复杂度：O(n)，空间复杂度O(n)

// 解法3：滑动窗口思想，用双指针+哈希表实现
function lengthOfLongestSubStringSet(str) {
    // write code here
    let res = 0
    let left = 0
    const set = new Set()
    for (let i = 0; i < str.length; i++) {
        if (set.has(str[i])) {
            set.delete(str[left])
            left++
        }
        set.add(str[i])
        res = Math.max(i - start + 1, res)
    }
    return res
}
// 时间复杂度：O(n)，空间复杂度O(n)
