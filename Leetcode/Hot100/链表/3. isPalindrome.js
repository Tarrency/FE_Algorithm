/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 * 判断链表是否回文
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const res = []
    while (head) {
        res.push(head.val)
        head = head.next
    }
    for (let i = 0, j = res.length - 1; i < j; i++, j--) {
        if (res[i] !== res[j]) {
            return false
        }
    }
    return true
}
// 时间复杂度：O(n)，空间复杂度：O(n)
// @lc code=end

