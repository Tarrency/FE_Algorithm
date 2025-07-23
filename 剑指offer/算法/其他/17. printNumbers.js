/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型 最大位数
 * @return int整型一维数组
 *
 * 打印从1到最大的n位数
 *
 * 输入：1
 * 返回值：[1,2,3,4,5,6,7,8,9]
 */
function printNumbers(n) {
    // write code here
    var res = []
    var max = Math.pow(10, n)
    for (var i = 1; i < max; i++) {
        newArray.push(i)
    }
    return res
}

function printNumbers1(n) {
    // write code here
    const max = 10 ** n - 1
    const res = []
    for (let i = 1; i <= max; i++) {
        res.push(i)
    }
    return res
}
