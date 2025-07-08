/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param {number} x
 * @return {void}
 *
 * 包含min函数的栈
 * 输入：["PSH-1","PSH2","MIN","TOP","POP","PSH1","TOP","MIN"]
 * 返回值：-1,2,1,-1
 * 要求：空间复杂度 O(n)，时间复杂度 O(1)
 */

// 解法1：辅助栈，存储最小值，并保持长度 = stack + 1 且栈顶永远是最小值
const minStack = [Infinity]
const stack = []
function push(node) {
    stack.push(node)
    const min = Math.min(minStack[minStack.length - 1], node)
    minStack.push(min)
}
function pop() {
    minStack.pop()
    return stack.pop()
}
function top() {
    return stack[stack.length - 1]
}
function min() {
    return minStack[minStack.length - 1]
}
// 空间复杂度 O(n)，时间复杂度 O(1)

// 解法2：存储差值，维护最小值
var MinStack = function() {
    this.stack = []
    this.min = Infinity // 当前最小值
}

MinStack.prototype.push = function(x) {
    if (this.stack.length === 0) {
        this.stack.push(0) // 第一个元素，差值为 0
        this.min = x
    } else {
        const diff = x - this.min // 存储差值
        this.stack.push(diff)
        if (diff < 0) { // 如果 x < min，更新 min
            this.min = x
        }
    }
}

MinStack.prototype.pop = function() {
    const diff = this.stack.pop()
    let poppedValue
    if (diff < 0) { // 如果 pop 的是当前 min
        poppedValue = this.min
        this.min = this.min - diff // 恢复前一个 min
    } else {
        poppedValue = this.min + diff // 恢复原始值
    }
    return poppedValue
}

MinStack.prototype.top = function() {
    const diff = this.stack[this.stack.length - 1]
    if (diff < 0) { // 如果差值 < 0，说明当前栈顶就是 min
        return this.min
    } else {
        return this.min + diff // 恢复原始值
    }
}

MinStack.prototype.getMin = function() {
    return this.min
}
// 空间复杂度 O(1)，时间复杂度 O(1)

// push(x)：如果 x 是新的最小值，存 x - prev_min（负数），并更新 min = x。
// 否则存 x - min（非负数）。

// pop()：如果弹出的是负数，说明弹出了 min，需要恢复前一个 min。
// 否则直接计算原始值：min + diff。

// top()：如果栈顶是负数，说明当前栈顶就是 min。
// 否则返回 min + diff。

// getMin()：直接返回 min。
