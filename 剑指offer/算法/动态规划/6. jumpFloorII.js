/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param number int整型
 * @return int整型
 *
 * 跳台阶扩展问题
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶(n为正整数)总共有多少种跳法。
 *
 * 输入：7
 * 返回值：21
 *
 * 要求：时间复杂度为 O(1)，空间复杂度为 O(1)
 */

// 解法1：递归
function jumpFloorII(number) {
    // write code here
    if (number === 1) return 1
    if (number === 2) return 2
    return 2 * jumpFloorII(number - 1)
}
// 时间复杂度：O(2^n)，每个递归会调用两个递归，因此会成2的指数级增长
// 空间复杂度：O(1)
// f(n-1) = f(0) + f(1)+f(2)+f(3) + ... + f((n-1)-1) = f(0) + f(1) + f(2) + f(3) + ... + f(n-2)
// f(n) = f(0) + f(1) + f(2) + f(3) + ... + f(n-2) + f(n-1) = f(n-1) + f(n-1)
// f(n) = 2*f(n-1)

// 解法2：递归+map缓存
function jumpFloorMap(number, memo = new Map()) {
    // write code here
    if (number === 1) return 1
    if (number === 2) return 2
    if (memo.has(number)) return memo.get(number) // 检查是否已缓存
    const result = 2 * jumpFloor(number - 1, memo)
    memo.set(number, result) // 缓存结果
    return result
}

// 解法3：动态规划，dp[i] = dp[i-1] + dp[i-2]
function jumpFloorIIDP(number) {
    // write code here
    const dp = new Array(number + 1)
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= number; i++) {
        dp[i] = 2 * dp[i - 1]
    }
    return dp[number]
}
// 时间复杂度为 O(n)，空间复杂度为 O(n)

// 解法4：迭代法，n1表示 dp[i-1]
function jump(number) {
    if (number <= 2) return number
    let res = 0
    let n1 = 2
    for (let i = 3; i <= number; i++) {
        res = 2 * n1
        n1 = res // dp[i - 1]进化为dp[i]
    }
    return res
}
// 时间复杂度为 O(n)，空间复杂度为 O(1)

// 解法5：数学公式，幂运算
function jumpFloorIIMath(number) {
    if (number <= 0) return 0
    return Math.pow(2, number - 1)
}
// 时间复杂度为 O(1)，空间复杂度为 O(1)

// 解法5：数学公式，位运算
function jumpFloorIIBit(number) {
    if (number <= 0) return 0
    return 1 << (n - 1)
}
// a << b 等价于 a × (2^b)
// 将数字的二进制表示向左移动指定位数，右侧补0
// 时间复杂度为 O(1)，空间复杂度为 O(1)
