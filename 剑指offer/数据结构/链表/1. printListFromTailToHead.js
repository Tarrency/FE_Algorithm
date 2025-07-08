/* function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @return numbers int整型一维数组
 *
 * 从尾到头打印链表
 * 输入：{1,2,3}
 * 返回值：[3,2,1]
 */

// 解法1：数组API unshift()，正向遍历，头插数组
function printListFromTailToHead1(head) {
    const arr = []
    while (head) {
        arr.unshift(head.val)
        head = head.next
    }
    return arr
}

// 解法2：数组API reverse()，先存后翻
function printListFromTailToHead2(head) {
    const arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    return arr.reverse()
}

// 解法3：递归，回溯特性，递归到底，回溯存值
function printListFromTailToHead3(head) {
    const arr = []
    function visit(node) {
        if (node) {
            visit(node.next) // 每次先递归到下一层
            arr.push(node.val)
        }
    }
    visit(head)
    return arr
}

// 解法4 栈，模拟栈实现逆序
function printListFromTailToHead4(head) {
    const stack = []
    while (head) {
        stack.push(head.val)
        head = head.next
    }
    const arr = []
    while (stack.length) {
        const node = stack.pop()
        arr.push(node)
    }
    return arr
}
// 时间复杂度O(N)，空间复杂度O(N)。各方法均如此
