/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param number int整型
 * @return int整型
 *
 * 跳台阶
 *
 * 输入：7
 * 返回值：21
 *
 * 要求：时间复杂度为 O(n)，空间复杂度为 O(1)
 */

// 解法1：递归
function jumpFloor(number) {
    // write code here
    if (number === 1) return 1
    if (number === 2) return 2
    return jumpFloor(number - 1) + jumpFloor(number - 2)
}
// 时间复杂度：O(2^n)，每个递归会调用两个递归，因此会成2的指数级增长
// 空间复杂度：O(1)

// 解法2：动态规划，dp[i] = dp[i-1] + dp[i-2]
function jumpFloorDP(number) {
    const dp = new Array(number + 1)
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= number; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[number]
}
// 时间复杂度为 O(n)，空间复杂度为 O(n)

// 解法3：迭代法，n1表示 dp[i-1]，n2表示 dp[i-2]
function jump(number) {
    if (number <= 2) return number
    let res = 0
    let n1 = 1
    let n2 = 2
    for (let i = 3; i <= number.length; i++) {
        res = n1 + n2
        n2 = n1 // dp[i - 2]进化为dp[i - 1]
        n1 = res // dp[i - 1]进化为dp[i]
    }
    return res
}
// 时间复杂度为 O(n)，空间复杂度为 O(1)
