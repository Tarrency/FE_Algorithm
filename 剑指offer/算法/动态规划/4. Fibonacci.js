/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型
 * @return int整型
 *
 * 斐波那契数列
 *
 * 输入：4
 * 返回值：3
 */

// 解法1：递归
function Fibonacci(n) {
    // write code here
    if (n === 1) return 1
    if (n === 2) return 1
    return Fibonacci(n - 1) + Fibonacci(n - 2)
}

// 解法2：动态规划，dp[i] = dp[i-1] + dp[i-2]
function FibonacciDP(n) {
    // write code here
    const dp = new Array(n + 1)
    dp[1] = 1
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}

// 解法3：迭代法，n1表示 dp[i-1]，n2表示 dp[i-2]
function FibonacciDP1(n) {
    // write code here
    if (n <= 2) return 1
    let res = 0
    n1 = 1
    n2 = 1
    for (let i = 3; i <= n; i++) {
        res = n1 + n2
        n2 = n1
        n1 = res
    }
    return res
}
