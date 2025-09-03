/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 * 输入: temperatures = [73,74,75,71,69,72,76,73]
 * 输出: [1,1,4,2,1,1,0,0]
 *
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// 解法1：暴力
const dailyTemperatures = (T) => {
    const res = new Array(T.length).fill(0)
    for (let i = 0; i < T.length; i++) {
        for (let j = i + 1; j < T.length; j++) {
            if (T[j] > T[i]) {
                res[i] = j - i
                break
            }
        }
    }
    return res
}

// 解法2: 栈
const dailyTemperaturesStack = (T) => {
    const res = new Array(T.length).fill(0)
    const stack = [] // 栈里存比自己大的索引，最大在最底下
    for (let i = T.length - 1; i >= 0; i--) { // 从右往左遍历
        while (stack.length && T[i] >= T[stack[stack.length - 1]]) { // cur比存的大就弹出
            stack.pop()
        }
        if (stack.length) {
            res[i] = stack[stack.length - 1] - i // cur比存的小就入栈
        }
        stack.push(i)
    }
    return res
}

// @lc code=end

