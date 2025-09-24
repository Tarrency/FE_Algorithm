/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */

const myReverse = (head, tail) => {
    let prev = tail.next // 保存 tail 之后的节点
    let cur = head
    while (prev !== tail) {
        [cur.next, prev, cur] = [prev, cur, cur.next] // 反转指针并移动指针
    }
    return [tail, head] // 返回反转后的头和尾
}

var reverseKGroup = function(head, k) {
    const dummy = new ListNode(-1) // 创建虚拟头节点
    dummy.next = head
    let prev = dummy // prev 初始指向虚拟头

    while (head) {
        let tail = prev
        // 检查剩余长度是否足够 k 个
        for (let i = 0; i < k; ++i) {
            tail = tail.next
            if (!tail) {
                return dummy.next // 不足 k 个直接返回
            }
        }
        const nex = tail.next; // 保存下一组的头
        [head, tail] = myReverse(head, tail) // 反转当前组

        // 重新连接链表
        prev.next = head // 前驱指向新头
        tail.next = nex // 新尾指向下一组
        prev = tail // 更新 prev
        head = tail.next // 更新 head
    }
    return dummy.next
}
// @lc code=end

