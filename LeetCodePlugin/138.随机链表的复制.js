/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 随机链表的复制
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return head
    const map = new Map()
    let cur = head
    while (cur) {
        map.set(cur, new Node(cur.val))
        cur = cur.next
    }
    cur = head
    while (cur) {
        map.get(cur).next = map.get(cur.next) || null
        map.get(cur).random = map.get(cur.random)
        cur = cur.next
    }
    return map.get(head)
}
// @lc code=end

