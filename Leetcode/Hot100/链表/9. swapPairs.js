/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */

// 解法1：递归
var swapPairs = function(head) {
    if (head === null || head.next === nul) {
        return head
    }
    const newHead = head.next
    head.next = swapPairs(newHead.next)
    newHead.next = head
    return newHead
}
// 时间空间复杂度O(n)

// 解法2：迭代
var swapPairs1 = function(head) {
    const dummyHead = new ListNode(0)
    dummyHead.next = head
    let temp = dummyHead
    while (temp.next !== null && temp.next.next !== null) {
        const node1 = temp.next
        const node2 = temp.next.next
        temp.next = node2
        node1.next = node2.next
        node2.next = node1
        temp = node1
    }
    return dummyHead.next
}
// 时间复杂度O(n),空间复杂度O(1)

// @lc code=end

