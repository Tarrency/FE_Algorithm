/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 * 最少的硬币个数
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3
 * 解释：11 = 5 + 5 + 1
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(amount + 1) // 填一个超大值
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            // 如果以 coins[j]为步长，前面不存在台阶，继续下一次（如果步长有序，则可 break）
            if (i < coins[j]) continue
            dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
        }
    }
    return dp[amount] > amount ? -1 : dp[amount]
}
// 时间复杂度：O(amount × n)，其中 n = coins.length
// 空间复杂度：O(amount)
// @lc code=end

