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

// 解法1：暴力
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
// 时间复杂度：O(n²)，空间复杂度O(1)

// 解法2：
