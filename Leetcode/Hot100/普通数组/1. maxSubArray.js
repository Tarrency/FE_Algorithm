/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param array int整型一维数组
 * @return int整型
 *
 * 连续子数组的最大和
 *
 * 输入：[1,-2,3,10,-4,7,2,-5]
 * 返回值：18
 * 要求:时间复杂度为 O(n)，空间复杂度为 O(n)
 * 进阶:时间复杂度为 O(n)，空间复杂度为 O(1)
 */

// 解法1：动态规划，转移方程：dp[i] = Math.max(dp[i-1]+array[i], array[i]);
function FindGreatestSumOfSubArrayDP(array) {
    // write code here
    const dp = []
    dp[0] = array[0]
    const n = array.length
    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(dp[i - 1] + array[i], array[i])
    }
    return Math.max(...dp)
}
// 时间复杂度为 O(n)，空间复杂度为 O(n)

// 解法2：动态规划，动态记录子数组最大和
function FindGreatestSumOfSubArray(array) {
    let sum = 0 // 以 array[i] 结尾的子数组的最大和
    let res = array[0]
    for (let i = 0; i < array.length; i++) {
        sum = Math.max(array[i], array[i] + sum)
        res = Math.max(sum, res)
    }
    return res
}
// 时间复杂度为 O(n)，空间复杂度为 O(1)

// 解法3：贪心，如果 sum > 0，则说明 sum 对结果有增益效果，否则舍弃
var maxSubArray = function(nums) {
    let res = nums[0]
    let sum = 0 // 前几位和
    for (const num of nums) {
        if (sum > 0) {
            sum += num
        } else {
            sum = num
        }
        res = Math.max(res, sum)
    }
    return res
}
// 时间复杂度为 O(n)，空间复杂度为 O(1)
