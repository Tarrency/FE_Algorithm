// 从尾到头打印链表
/*function ListNode(x){
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
 * 
 * 输入：{1,2,3}
 * 返回值：[3,2,1]
 */

// 时间复杂度O(N)，空间复杂度O(N)。各方法均如此
function printListFromTailToHead(head) {
    // 解法1：数组API unshift()
    let arr = []
    while (head) {
        arr.unshift(head.val)
        head = head.next
    }
    return arr

    // // 解法2：数组API reverse()
    // let arr = []
    // while(head){
    //     arr.push(head.val)
    //     head = head.next
    // }
    // return arr.reverse()

    // // 解法3：递归，回溯特性
    // let arr = []
    // function visit(node){
    //     if(node){
    //         visit(node.next) // 每次先递归到下一层
    //         arr.push(node.val)
    //     }
    // }
    // visit(head)
    // return arr

    // // 解法4 栈
    // let stack = []
    // while(head){
    //     stack.push(head.val)
    //     head = head.next
    // }
    // let arr = []
    // while(stack.length){
    //     let node = stack.pop()
    //     arr.push(node)
    // }
    // return arr
}