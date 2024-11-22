// 合并两个有序链表
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pHead1 ListNode类 
 * @param pHead2 ListNode类 
 * @return ListNode类
 * 
 * 
 * 输入：{1,3,5},{2,4,6}
 * 返回值：{1,2,3,4,5,6}
 */
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
    // 时间复杂度：O(n+m)，其中 n 和 m 分别为两个链表的长度。每次调用递归都会去掉 l1 或者 l2 的头节点（直到至少有一个链表为空），函数 mergeTwoList 至多只会递归调用每个节点一次
    // 空间复杂度：O(n+m)，消耗栈空间，栈空间的大小取决于递归调用的深度。结束递归调用时 mergeTwoLists 函数最多调用 n+m 次

    // 解法2：迭代
    //（1）新建一个空的表头后面连接两个链表排序后的结点。
    //（2）遍历两个链表都不为空的情况，取较小值添加在新的链表后面，每次只把被添加的链表的指针后移。
    //（3）遍历到最后肯定有一个链表还有剩余的结点，它们的值将大于前面所有的，直接连在新的链表后面即可。
    if (!pHead1) return pHead2
    if (!pHead2) return pHead1

    let head = new ListNode(-1)
    let cur = head

    while (pHead1 && pHead2) {
        if (pHead1.val <= pHead2.val) {
            cur.next = pHead1
            pHead1 = pHead1.next
        } else {
            cur.next = pHead2
            pHead2 = pHead2.next
        }
        cur = cur.next
    }

    if (!pHead1) cur.next = pHead2
    if (!pHead2) cur.next = pHead1

    return head.next
    // 时间复杂度: O(n)，最坏情况遍历2 * n个结点
    // 空间复杂度: 0(1)，无额外空间使用，新建的链表属于返回必要空间
}