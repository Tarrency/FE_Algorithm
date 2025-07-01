/* function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pHead1 ListNode类
 * @param pHead2 ListNode类
 * @return ListNode类
 *
 * 删除排序链表中的重复节点
 * 输入：{1,2,3,3,4,4,5}
 * 返回值：{1,2,5}
 */

// 解法1：改变next指向直接删除
function deleteDuplications(pHead) {
    const dummy = new ListNode(-1, pHead) // 处理头结点重复的情况
    let cur = dummy
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            const x = cur.next.val // 通过重复值的数来判断删除节点，这样就能删掉所有重复值只留下不同值
            while (cur.next && cur.next.val === x) {
                cur.next = cur.next.next // 将cur的next跳一个指向下二个节点
            }
        } else { // 注意if的条件和if的执行内的head是不一样的，head被改写，所以必须用到else
            cur = cur.next
        }
    }
    return dummy.next
}
// 时间复杂度O(n),空间复杂度O(1)

// 解法2：递归
var deleteDuplicates = function(head) {
    if (head === null || head.next === null) return head
    if (head.val === head.next.val) {
        while (head.next && head.next.val === head.val) head.next = head.next.next
        return deleteDuplicates(head.next) // 不保留当前head节点，全部删除
    } else {
        head.next = deleteDuplicates(head.next)
    }
    return head
}
// 时间复杂度O(n),空间复杂度O(n)

/* function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pHead1 ListNode类
 * @param pHead2 ListNode类
 * @return ListNode类
 *
 * 删除排序链表中的重复节点 II
 * 输入：{1,2,3,3,4,4,5}
 * 返回值：{1,2,3,4,5}
 */

// 解法1：迭代
var deleteDuplication = function(head) {
    let cur = head
    while (cur && cur.next) {
        if (cur.next.val === cur.val) {
            // cur.next = cur.next.next
            const x = cur.val
            while (cur.next && cur.next.val === x) {
                cur.next = cur.next.next
            }
        } else {
            cur = cur.next
        }
    }
    return head
}
// 时间复杂度O(n),空间复杂度O(1)

// 解法2：递归
var deleteDuplicate = function(head) {
    if (!head || !head.next) return head
    if (head.val === head.next.val) {
        while (head.next && head.next.val === head.val) head.next = head.next.next
        // head.next = head.next.next
        return deleteDuplicate(head)
    } else {
        head.next = deleteDuplicate(head.next)
    }
    return head
}

