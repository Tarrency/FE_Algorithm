/*
 * @Author: wangqi01 13693607080@163.com
 * @Date: 2025-04-02 17:33:34
 * @LastEditors: wangqi01 13693607080@163.com
 * @LastEditTime: 2025-06-26 14:17:38
 * @FilePath: \FE_Algorithm\剑指offer\链表\8. deleteDuplication.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 删除排序链表中的重复节点
// 输入：{1,2,3,3,4,4,5},返回值：{1,2,5}
// 解法1：改变next指向直接删除
function deleteDuplication(pHead) {
    const dummy = new Node(-1, pHead) // 处理头结点重复的情况
    let cur = dummy
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            const x = cur.next.val // 通过重复值的数来判断删除节点，这样就能删掉所有重复值只留下不同值
            while (cur.next && cur.next.val === x) {
                cur.next = cur.next.next // 将cur的next跳一个指向下二个节点
            }
        } else {
            cur = cur.next
        }
    }
    return dummy.next
}
// 时间复杂度O(n),空间复杂度O(1)

// 解法2：递归
// var deleteDuplicates = function(head) {
//     if (head === null || head.next === null) return head
//     if (head.val === head.next.val) {
//         while (head.next && head.next.val === head.val) head.next = head.next.next
//         return deleteDuplicates(head.next) // 不保留当前head节点，全部删除
//     } else {
//         head.next = deleteDuplicates(head.next)
//     }
//     return head
// }

// 时间复杂度O(n),空间复杂度O(n)

// 删除排序链表中的重复元素 II
// 输入：{1,2,3,3,4,4,5},返回值：{1,2,3,4,5}
// 解法1 迭代
// var deleteDuplicates = function(head) {
//     let cur = head
//     while (cur && cur.next) {
//         if (cur.next.val === cur.val) {
//             // cur.next = cur.next.next
//             const x = cur.val
//             while (cur.next && cur.next.val === x) {
//                 cur.next = cur.next.next
//             }
//         } else {
//             cur = cur.next
//         }
//     }
//     return head
// }
// 时间复杂度O(n),空间复杂度O(1)

// 解法2，递归
var deleteDuplicates = function(head) {
    if (!head || !head.next) return head
    if (head.val === head.next.val) {
        while (head.next && head.next.val === head.val) head.next = head.next.next
        // head.next = head.next.next
        return deleteDuplicates(head)
    } else {
        head.next = deleteDuplicates(head.next)
    }
    return head
}

