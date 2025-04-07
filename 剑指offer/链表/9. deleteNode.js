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
function deleteNode(head, val) {
    if (!head || !head.next) return
    let node = new ListNode(-1, head)
    while (node.next) {
        if (node.next.val === val) {
            node.next = node.next.next
        }
        node = node.next
    }
    return head
}

// var deleteNode = function(head, val) {
//   if(head.val == val){
//       return head.next
//   }
//   head.next = deleteNode(head.next,val);
//   return head
// };
// // 时间空间都是n
/**
   * 假设【1，2，3】，目标值是2
   * 当前head是1.
   * 本来head.next是2,但是调用deletenode函数的时候刚刚好2==2,把2（head）的下一个值3的指针返回回去
   * 所以head.next = 3
   * 1->3
   *
  */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
