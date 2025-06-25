// 删除排序链表中的节点
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
 * @param head ListNode类
 * @param val int整型
 * @return ListNode类
 */

// 输入 {2,5,1,9},5，输出{2,1,9}
// 解法1：迭代，目标节点（next的val等于val）改变next指向
function deleteNode(head, val) {
    const dummy = new ListNode(-1, head)
    let cur = dummy
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        }
        cur = cur.next
    }
    return dummy.next
}

// 解法2：递归
// var deleteNode = function(head, val) {
//     if (!head) return
//     if (head.val === val) {
//         return head.next
//     }
//     head.next = deleteNode(head.next, val)
//     return head
// }
// // 时间空间都是n
/**
   * 假设【1，2，3】，目标值是2
   * 当前head是1.
   * 本来head.next是2,但是调用deletenode函数的时候刚刚好2==2,把2（head）的下一个值3的指针返回回去
   * 所以head.next = 3
   * 1->3
   *
  */
