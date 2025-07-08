/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param str 字符串型
 * @return 字符串型
 *
 * 翻转单词序列
 * 输入："nowcoder. a am I"
 * 返回值："I am a nowcoder."
 * 要求：时间、空间复杂度O(n)
 */
function ReverseSentence(str) {
    const arr = str.split(' ')
    return arr.reverse().join(' ')
}

function ReverseSentenceWithStack(str) {
    const stack = []
    // const words = str.trim().split(/\s+/) // 分割单词（处理多余空格）
    const words = str.split(' ')

    // 所有单词压栈
    for (const word of words) {
        stack.push(word)
    }

    // 依次弹出单词，拼接结果
    const reversed = []
    while (stack.length > 0) {
        reversed.push(stack.pop())
    }

    return reversed.join(' ')
}
