// 反转链表
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @return ListNode类
 *
 *
 * 输入：{1,2,3}
 * 返回值：{3,2,1}
 */
function ReverseList(head) {
    // 解法1：ES6的赋值解构(迭代)
    // 用双指针（prev 和 cur）边移动边反转指针方向，最终 prev 指向新头节点
    let prev = null
    let cur = head
    while (cur) {
        [cur.next, prev, cur] = [prev, cur, cur.next] // 转当前节点（cur）的next箭头指向prev
    }
    return prev
    // 时间复杂度：O(n)，其中 n 是链表的长度。需要遍历链表一次
    // 空间复杂度：O(1)

    // // 解法2：迭代
    // let prev = null
    // let cur = head
    // while(cur){
    //     let temp = cur.next
    //     cur.next = prev // 转当前节点的next指向prev
    //     prev = cur // 移动
    //     cur = temp // 移动
    // }
    // return prev // prev正好在last，即新head的first
    // // 时间复杂度：O(n)，其中 n 是链表的长度。需要遍历链表一次
    // // 空间复杂度：O(1)

    // // 解法3：递归
    // // 递归到链表末尾，然后在回溯过程中逐节点反转指针方向，最终返回新的头节点（原链表的尾节点）
    // if(!head) return head // 空链表情况
    // if(!head.next) return head
    // let last = ReverseList(head.next) // 到last，也就是newHead的first
    // head.next.next = head // 改变当前节点的下一个节点的next指向，为当前节点，相当于next指向翻转
    // head.next = null // 当前节点的next指向空，相当于再删除自己的next指向
    // return last
    // // 时间复杂度：O(n)，其中 n 是链表的长度。需要对链表的每个节点进行反转操作，n 次递归 × O(1) 操作
    // // 空间复杂度：O(n)，其中 n 是链表的长度。空间复杂度主要取决于递归调用的栈空间，最多为 n 层。
}
