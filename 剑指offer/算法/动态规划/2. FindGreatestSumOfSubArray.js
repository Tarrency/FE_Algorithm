/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param array int整型一维数组
 * @return int整型
 *
 * 连续子数组的最大和（二）
 *
 * 输入：[1,-2,3,10,-4,7,2,-5]
 * 返回值：[3,10,-4,7,2]

 * 存在多个最大和的连续子数组，那么返回其中长度最长
 * 要求:时间复杂度为 O(n)，空间复杂度为 O(n)
 * 进阶:时间复杂度为 O(n)，空间复杂度为 O(1)
 */

// 解法1：动态规划，转移方程：dp[i] = Math.max(dp[i-1]+array[i], array[i]);
function FindGreatestSumOfSubArray(array) {
    const dp = []
    dp[0] = array[0]
    let start
    let end = null
    for (let i = 1; i < array.length; i++) {
        dp[i] = Math.max(array[i], array[i] + dp[i - 1])
    }
    end = dp.lastIndexOf(Math.max(...dp)) // 存在多个最大和的连续子数组，那么返回其中长度最长
    for (start = end; start > 0; start--) {
        if (dp[start - 1] < 0) break // start是dp第一个大于0的位
    }

    return array.slice(start, end + 1)
}

// 解法2：动态规划
function FindGreatestSumOfSubArray1(array) {
    let sum = 0 // 以 array[i] 结尾的子数组的最大和
    let res = array[0]
    let left = 0
    let right = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] + sum >= array[i]) {
            sum = sum + array[i]
        } else {
            sum = array[i]
            left = i
        }
        if (sum >= res) {
            res = sum
            right = i
        }
        // sum = Math.max(array[i], array[i] + sum);
        // res = Math.max(sum, res);
    }
    if (left > right) {
        left = right
    }
    return array.slice(left, right + 1)
}

// 解法3：贪心
var FindGreatestSumOfSubArray2 = function(nums) {
    let sum = 0
    let res = nums[0]
    let start = 0; let end = 0 // 最大子数组的起始位置
    for (let i = 0; i < nums.length; i++) {
        if (sum >= 0) { // 等于是因为要找最长子数组
            sum += nums[i]
        } else {
            sum = nums[i]
            start = i
        }
        if (sum >= res) { // 等于是因为要找最长子数组
            res = sum
            end = i
        }
    }
    if (start > end) {
        start = end
    }
    return nums.slice(start, end + 1)
}

// 解法3的另一种写法
var FindGreatestSumOfSubArray3 = function(nums) {
    // if (nums.length === 0) return []
    let sum = 0
    let res = nums[0]
    let start = 0; let end = 0 // 最大子数组的起始位置
    let cur_start = 0 // 当前子数组的临时起始位置，全负数组时start会移动到最后所以需要多个变量记录
    for (let i = 0; i < nums.length; i++) {
        if (sum >= 0) { // 等于是因为要找最长子数组
            sum += nums[i]
        } else {
            sum = nums[i]
            cur_start = i
        }
        if (sum >= res) { // 等于是因为要找最长子数组
            res = sum
            start = cur_start // 使用临时起始位置
            end = i
        }
    }
    return nums.slice(start, end + 1)
}
