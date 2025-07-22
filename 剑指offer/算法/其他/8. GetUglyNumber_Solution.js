/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param index int整型
 * @return int整型
 *
 * 丑数
 * 只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7
 * 求按从小到大的顺序的第 n个丑数
 *
 * 输入：7
 * 输出：8
 *
 * 要求：时间复杂度 O(n)，空间复杂度 O(n)
 */

// 解法1：动态规格，每个丑数都是由更小的丑数乘以2、3或5得到的
function GetUglyNumber_Solution(index) {
    // write code here
    // 0-6直接返回index作为结果
    // 设置三个指针，分别指向2、3、5队列，取出最小的值压入,这个值不会再压入，所以该队列的指针右移
    // 当最小值同时有两个时，同时取出，两个指针都右移
    if (index < 7) { return index }
    let p2 = 0; let p3 = 0; let p5 = 0; let newNum = 1
    const arr = [1]
    // 当丑数的数组长度达到了index时终止循环
    while (arr.length < index) {
        newNum = Math.min(arr[p2] * 2, arr[p3] * 3, arr[p5] * 5)
        if (newNum === arr[p2] * 2) { p2++ }
        if (newNum === arr[p3] * 3) { p3++ }
        if (newNum === arr[p5] * 5) { p5++ }
        arr.push(newNum)
    }
    return newNum
}
