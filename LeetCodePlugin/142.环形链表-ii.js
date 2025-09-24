/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(pHead) {
    while (pHead) {
        if (pHead.flag) {
            return pHead
        }
        pHead.flag = true
        pHead = pHead.next
    }
    return null
};
// @lc code=end

