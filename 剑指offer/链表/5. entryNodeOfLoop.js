
// 链表中环的入口结点
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pHead ListNode类 
 * @return ListNode类
 * 
 * 
 * 输入：{1,2},{3,4,5}
 * 返回值：3
 */
function EntryNodeOfLoop(pHead) {
    // 解法1：set找重
    let set = new Set()
    while (pHead) {
        if (set.has(pHead)) {
            return pHead
        }
        set.add(pHead)
        pHead = pHead.next
    }
    return null
    // 空间复杂度 O(n)，时间复杂度 O(n)

    // 解法2：标记法
    while (pHead) {
        if (pHead.flag) {
            return pHead
        }
        pHead.flag = true
        pHead = pHead.next
    }
    return null
    // 空间复杂度 O(1)，时间复杂度 O(n)

    // 解法2：标记法
    while (pHead) {
        if (pHead.flag) {
            return pHead
        }
        pHead.flag = true
        pHead = pHead.next
    }
    return null
    // 空间复杂度 O(1)，时间复杂度 O(n)

    // 解法3：快慢指针
    // fast两倍，slow一倍，如果相遇则有环，入环点是
    let fast = pHead
    let slow = pHead

    // 空间复杂度 O(1)，时间复杂度 O(n)
}