/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param numbers int整型一维数组
 * @return string字符串
 *
 * 把数组排成最小的数
 *
 * 输入：[3,32,321]
 * 返回值："321323"
 */

// 解法1：sort((a, b) => a - b)是从小到大排序
function PrintMinNumber(numbers) {
    // write code here
    return numbers.sort((a, b) => (a + '' + b) - (b + '' + a)).join('')
}
// 贪心算法：局部最优解
// 既然整个序列是最小的，那么越靠前的元素肯定也是最小的，即越靠前的元素值越小
// 以下sort内部自定义代码意义为确保任意一个数拼接后面的数都小于后面的数拼接这个数。减法符号有隐性转化为数字的特点。
// 其实和认识sort函数之前练习冒泡排序一样，用双循环也能写出代码。

// 解法2：字符串写法
function PrintMinNumberStr(numbers) {
    // write code here
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            const str1 = String(numbers[j]) + String(numbers[j + 1])
            const str2 = String(numbers[j + 1]) + String(numbers[j])
            if (Number(str1) > Number(str2)) {
                const temp = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp
            }
        }
    }
    return numbers.join('')
}
