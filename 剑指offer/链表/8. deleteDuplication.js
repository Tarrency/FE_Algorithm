// 删除排序链表中的重复节点
// 输入：{1,2,3,3,4,4,5},返回值：{1,2,5}
// 解法1，改变next指向直接删除
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

// 解法2，递归
var deleteDuplicates = function(head) {
    if (!head || !head.next) return head
    if (head.val === head.next.val) {
        while (head.next && head.next.val === head.val) head.next = head.next.next
        return deleteDuplicates(head.next)
    } else {
        head.next = deleteDuplicates(head.next)
    }
    return head
}
// 时间复杂度O(n),空间复杂度O(n)

// 删除排序链表中的重复元素 II
// 输入：{1,2,3,3,4,4,5},返回值：{1,2,3,4,5}
// 解法1 迭代
// function deleteDuplication(pHead) {
//   if (!pHead) return pHead
//   let node = pHead
//   while (node.next) { // 有next才判断相等
//       if (node.next.val === node.val) {
//           node.next = node.next.next
//       } else {
//           node = node.next
//       }
//   }
//   return pHead
// }
// 时间复杂度O(n),空间复杂度O(1)

// 解法2 递归
// var deleteDuplicates = function(head) {
//     if (head === null || head.next === null) return head
//     if (head.val === head.next.val) {
//         while (head.next && head.next.val === head.val) head.next = head.next.next
//         // head.next = head.next.next
//         return deleteDuplicates(head)
//     } else {
//         head.next = deleteDuplicates(head.next)
//     }
//     return head
// }

