// 两个链表的第一个公共结点
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pHead1 ListNode类
 * @param pHead2 ListNode类
 * @return ListNode类
 *
 *
 * 输入：{1,2,3},{4,5},{6,7}
 * 返回值：{6,7}
 * 空间复杂度 O(1)，时间复杂度 O(n)
 */
function FindFirstCommonNode(pHead1, pHead2) {
    // 解法1：set找重
    const set = new Set()
    while (pHead1) {
        set.add(pHead1)
        pHead1 = pHead1.next
    }
    while (pHead2) {
        if (set.has(pHead2)) {
            return pHead2
        }
        pHead2 = pHead2.next
    }
    return null
    // 空间复杂度 O(n)，时间复杂度 O(n)

    // 解法2:双指针，快慢指针，总会遇到
    let p1 = pHead1
    let p2 = pHead2
    while (p1 !== p2) {
        p1 = (p1 ? p1.next : pHead2) // p1走完了从头走(pHead2)
        p2 = (p2 ? p2.next : pHead1)
    }
    return p1 // 或p2
    // 空间复杂度 O(1)，时间复杂度 O(n)
}
