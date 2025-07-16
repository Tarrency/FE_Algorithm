/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param prices int整型一维数组
 * @return int整型
 *
 * 买卖股票的最好时机(一)
 *
 * 输入：[8,9,2,5,4,7,1]
 * 返回值：5
 * 2时买入，7时卖出
 *
 * 要求：时间复杂度为 O(n)，空间复杂度为 O(1)
 */

/**
 * 解法一：暴力法（嵌套循环）
 * 思路：
 * （1）找出给定数组中两个数字之间的最大差值（即，最大利润）。
 * （2）第二个数字（卖出价格）必须大于第一个数字（买入价格）。
 * 时间复杂度：O(n^2)。
 * 空间复杂度：0(1)，只使用了一个常数变量。
 */
function maxProfit(prices) {
    // write code here
    let res = 0
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const diff = prices[j] - prices[i]
            res = Math.max(res, diff)
        }
    }
    return res
}

/**
 * 解法二：贪心
 * 思路：
 * （1）将第一天看成价格最低，后续遍历的时候遇到价格更低则更新价格最低，
 * （2）每次都比较最大收益与当日价格减去价格最低的值，选取最大值作为最大收益
 * 时间复杂度：O(n)。
 * 空间复杂度：0(1)，只使用了常数变量。
 */
function maxStockProfit(prices) {
    // write code here
    let res = 0
    let min = prices[0]
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(prices[i], min)
        res = Math.max(prices[i] - min, res)
    }
    return res
}

/**
 * 解法三：动态规划
 * 思路：
 * （1）用dp[i][0]表示 第i天不持股到该天为止的最大收益，dp[i][1]表示第i天持股，到该天为止的最大收益。
 * （2）(初始状态) 第一 天不持股，则总收益为0，dp[0][0]=0; 第- -天持股，则总收益为买股票的花费，此时为负数，dp[0][1] = - prices[0]。
 * （3）(状态转移) 对于之后的每一天，如果当天不持股，有可能是前面的若干天中卖掉了或是还没买，因此到此为止的总收益和前一天相同，也有可能是当天才
 *     卖掉，我们选择较大的状态dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i])
 * (4) 如果当天持股，有可能是前面若千天中买了股票，当天还没卖，因此收益与前一天相同，也有可能是当天买入，此时收益为负的股价，同样是选取最大值:dp[i][1] = max(dp[i - 1][1], -prices[i])。
 * 时间复杂度：O(n)，遍历一次数组
 * 空间复杂度：0(n)，动态规划富足数组的空间。
 */
function maxProfitDP(prices) {
    const len = prices.length
    if (len === 0) return 0

    const dp = [] // dp[i][0]表示某一天不持股到该天为止的最大收益，dp[i] [1]表示某天持股，到该天为止的最大收益
    for (let i = 0; i < len; i++) {
        dp[i] = []
    }
    dp[0][0] = 0 // 第一天不持股，总收益为0
    dp[0][1] = -prices[0] // 第一天持股，总收益为减去该天的股价

    for (let i = 1; i < len; i++) { // 遍历后续每天，状态转移
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
    }

    return dp[len - 1][0] // 最后一天不持股，到该天为止的最大收益
};
