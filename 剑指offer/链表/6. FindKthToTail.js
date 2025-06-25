// 链表中倒数第k个节点
/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pHead ListNode类
 * @param k int整型
 * @return ListNode类
 */
let size = 0
function FindKthToTail(pHead, k) {
    // 解法1：快慢指针，确保距离为k，移动到末尾也相差k
    let fast = pHead
    let slow = pHead
    while (k--) {
        if (!fast) return null // 链表长度小于k b
        fast = fast.next
    }
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    return slow
    // 空间复杂度 O(1)，时间复杂度 O(n)

    // 解法2：反转链表后的第k个
    let pre = null
    let cur = head
    let count = 0

    while (cur) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }

    while (pre) {
        count++
        if (count === k) {
            return pre
        }
        pre = pre.next
    }

    // 解法3：递归反转链表，回溯时的第k个
    if (pHead === null) {
        return null
    }
    const val = FindKthToTail(pHead.next, k)
    size += 1
    if (size === k) {
        return pHead
    }
    return val

    // 解法3：反转数组索引
    // let tmpArr = [], p = pHead
    //   while (p) {
    //       tmpArr.push(p)
    //       p = p.next
    //   }
    //   tmpArr = tmpArr.reverse()
    //   return tmpArr[k - 1]
    // 空间复杂度 O(n)，时间复杂度 O(n)

    // 解法4：正向数组索引
    let p = pHead; const tmpArr = []
    while (p) {
        tmpArr.push(p)
        p = p.next
    }
    return tmpArr[tmpArr.length - k]
    // 空间复杂度 O(n)，时间复杂度 O(n)

    // 解法5：索引
    let len = 0; let temp = pHead
    while (temp) {
        temp = temp.next
        len++
    }
    if (len < k) return null
    temp = pHead
    for (let i = 0; i < len - k; i++) {
        temp = temp.next
    }
    return temp
    // 空间复杂度 O(1)，时间复杂度 O(n)
}
