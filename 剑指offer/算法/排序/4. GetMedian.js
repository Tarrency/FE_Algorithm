/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param num int整型一维数组
 * @return int整型
 *
 * 数据流的中位数
 *
 * 输入：[5,2,3,4,1,6,7,0,8]
 * 返回值："5.00 3.50 3.00 3.50 3.00 3.50 4.00 3.50 4.00 "
 *
 * 空间复杂度 O(n) ，时间复杂度 O(nlogn)
 */

// 解法1：插入前排序
const arr = []
function Insert(num) {
    let i = 0
    while (arr[i] < num) i++
    arr.splice(i, 0, num)// 增加一个元素
}
function GetMedian() {
    const index = Math.floor(arr.length / 2)
    if (arr.length % 2) { // 奇数
        return arr[index]
    } else {
        return (arr[index] + arr[index - 1]) / 2
    }
}
// 空间复杂度 O(n) ，时间复杂度 O(n)

// 解法2：插入后排序
const res = []
const len = 0
function Insert2(num) {
    res.push(num)
    return res
}
function GetMedian2() {
    arr.sort((a, b) => a - b)
    const len = res.length
    // write code here
    // 如果是奇数
    if (len % 2 === 1) {
        return res[(len - 1) / 2]
    } else {
        // 否则返回中间两个数的平均值
        return (arr[(len / 2)] + arr[(len / 2) - 1]) / 2
    }
}
// 空间复杂度 O(n) ，时间复杂度 O(nlogn)
