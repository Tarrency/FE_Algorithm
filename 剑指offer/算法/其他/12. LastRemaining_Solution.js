/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型
 * @param m int整型
 * @return int整型
 *
 * 孩子们的游戏(圆圈中最后剩下的数)
 *
 * 一个圈一共n个数字是0~n-1，每次删除第m个数字，然后从下一个开始计算继续删除第m个，求最后留在圈内的是哪个数
 *
 * 输入：2、3
 * 返回值：1
 *
 * 要求：时间复杂度 O(n)，空间复杂度 O(n)
 */
function LastRemaining_Solution(n, m) {
    // write code here
    if (n < 1 || m < 1) { return null }
    const arr = []
    for (let i = 0; i < n; i++) {
        arr.push(i) // 初始化n内所有数字
    }
    let index = 0 // 记录当前索引号
    while (arr.length > 1) {
        index = (index + m - 1) % arr.length // 之前下来的index相当于新一轮的第0索引号，数到m-1出局
        arr.splice(index, 1) // 出局
    }
    return arr[0]
}
