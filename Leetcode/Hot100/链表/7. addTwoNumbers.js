/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let flag = 0
    let r3 = l3 = new ListNode(-1)
    while (l1 || l2 || flag) {
        const a = l1 ? l1.val : 0
        const b = l2 ? l2.val : 0
        const sum = a + b + flag
        flag = sum >= 10 ? 1 : 0
        r3.next = new ListNode(sum % 10)
        r3 = r3.next
        l1 && (l1 = l1.next)
        l2 && (l2 = l2.next)
    }
    return l3.next
}
// @lc code=end

