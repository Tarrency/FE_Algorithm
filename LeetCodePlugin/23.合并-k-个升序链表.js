/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKList = function(lists) {
    return lists.reduce((accumulator, currentList) => {
        let node = currentList
        while (node) {
            accumulator.push(node)
            node = node.next
        }
        return accumulator
    }, []).sort((a, b) => a.val - b.val)
        .reduceRight((builtList, currentNode) => {
            currentNode.next = builtList
            return currentNode
        }, null)
}

var mergeKLists = function(lists) {
    function transform(l, arr) {
        while (l) {
            arr.push(l.val)
            l = l.next
        }
    }

    const arr = []
    lists.map(item => transform(item, arr))
    // if (!arr.length) new ListNode(null);
    arr.sort((a, b) => a - b)
    if (!arr.length) return new ListNode(null).next
    const head = new ListNode(arr[0])
    let res = head
    for (let i = 1; i < arr.length; i++) {
        res.next = new ListNode(arr[i])
        res = res.next
    }
    return head
}

// 时间复杂度：O(N log N)，空间复杂度：O(N)
// @lc code=end

