/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @return numbers int整型一维数组
 *
 * 用两个栈来实现一个队列
 * 输入：["PSH1","PSH2","POP","POP"]
 * 返回值：1,2
 */

const stack1 = []
const stack2 = []
function push(node) {
    stack1.push(node)
}
function pop() {
    if (!stack2.length) {
        while (stack1.length) {
            stack2.push(stack1.pop())
        }
    }
    return stack2.pop()
}
// 两个栈一个负责入栈stack1，一个负责出栈stack2
// 入栈时stack1就直接push存入元素
// 出栈时stack2中有元素直接pop出，没有则从入栈stack1中取（入栈stack1中pop出放入出栈stack2中）
// 因为栈是先进后出，所以放入出栈stack2中的为反方向
