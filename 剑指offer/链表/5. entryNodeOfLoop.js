/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2024-09-09 09:38:41
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2025-05-28 10:17:39
 * @FilePath: \FE_Algorithm\剑指offer\链表\5. EntryNodeOfLoop.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

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
    const set = new Set()
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

    // 解法3：快慢指针
    let fast = pHead
    let slow = pHead
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            break
        }
    }
    if (!fast || !fast.next) return null // 有种情况是链表没环，也走到头了
    slow = pHead
    while (fast !== slow) {
        fast = fast.next
        slow = slow.next
        if (fast === slow) {
            break
        }
    }
    return slow
    // 空间复杂度 O(1)，时间复杂度 O(n)

    // fast两倍，slow一倍，fast进环转圈，链表有环必相遇（第一次相遇），
    // 相遇后，fast从相遇点出发，改为一倍速，slow从链表头起点出发，相遇时即为入环点（第二次相遇）
    // 第一次相遇时：
    // 链表头到环入口长度为--a
    // 环入口到相遇点长度为--b
    // 相遇点到环入口长度为--c
    // 快指针路程=a+(b+c)k+b ，k>=1  其中b+c为环的长度，k为绕环的圈数
    // 慢指针路程=a+b
    // 快指针走的路程是慢指针的两倍（a+b）*2=a+(b+c)k+b
    // 化简得：a=(k-1)(b+c)+c,链表头到环入口的距离=相遇点到环入口的距离,最后一定相遇于环入口

    // 也就是说，快指针从相遇点开始一倍速走到环入口时（c），慢指针从链表头开始一倍速走到环入口（a）
}
