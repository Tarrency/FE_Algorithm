/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const set = new Set()
    let cur = headA
    while (cur) {
        set.add(cur)
        cur = cur.next
    }
    cur = headB
    while (cur) {
        if (set.has(cur)) {
            return cur
        }
        cur = cur.next
    }
    return null
};
// @lc code=end

