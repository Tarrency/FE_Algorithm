/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pushV int整型一维数组
 * @param popV int整型一维数组
 * @return bool布尔型
 *
 * 栈的压入、弹出序列
 * 输入：[1,2,3,4,5],[4,5,3,2,1]
 * 返回值：true
 */
function IsPopOrder(pushV, popV) {
    const stack = []
    for (let i = 0, j = 0; i < pushV.length; i++) {
        stack.push(pushV[i])
        while (stack.length && stack[stack.length - 1] === popV[j]) {
            stack.pop()
            j++
        }
    }
    return stack.length === 0
}

// 用一个辅助栈模拟入栈和出栈过程，每次入栈后检查栈顶是否与出栈序列匹配，匹配则弹出并移动出栈指针，最后检查栈是否为空。
// 时间、空间复杂度O(n)
