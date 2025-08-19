/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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

// 合并2个有序链表
function Merge(pHead1, pHead2) {
    // 解法1：递归，两个链表头部值较小的一个节点与剩下元素的merge操作结果合并
    if (!pHead1) return pHead2
    if (!pHead2) return pHead1
    if (pHead1.val <= pHead2.val) {
        pHead1.next = Merge(pHead1.next, pHead2)
        return pHead1
    } else {
        pHead2.next = Merge(pHead2.next, pHead1)
        return pHead2
    }
}

// 归并
const toSortList = (head, tail) => {
    if (!head) return head
    if (head.next === tail) {
        head.next = null // 断开节点，左闭右开
        return head
    }
    let slow = head; let fast = head
    while (fast !== tail) {
        slow = slow.next
        fast = fast.next
        if (fast !== tail) {
            fast = fast.next
        }
    }
    const mid = slow
    return merge(toSortList(head, mid), toSortList(mid, tail))
}

var sortList = function(head) {
    return toSortList(head, null)
}

// @lc code=end

