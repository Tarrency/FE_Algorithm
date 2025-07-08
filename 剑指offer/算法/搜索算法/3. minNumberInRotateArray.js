/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @return int整型
 *
 * 旋转数组的最小数字
 * 输入：[3,4,5,1,2]
 * 返回值：1
 * 要求：空间复杂度：O(1) ，时间复杂度：O(logn)
 */

// 解法1：二分，各递增子数组，nums[right]是最大值，用nums[right]和nums[mid]做比较
function minNumberInRotateArray(nums) {
    // write code here
    if (!nums.length) return
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[right] < nums[mid]) {
            left = mid + 1 // 右边小，最小值在右边
        } else if (nums[right] > nums[mid]) {
            right = mid // 最小值在左边
        } else {
            right-- // nums[mid] == nums[right]，处理重复元素，或者无法确认最小值在哪，保守处理边界
        }
    }
    return nums[left] // 当 left == right 时不进入循环，此时 nums[left] 就是最小值
}

// while (left <= right) + right = mid - 1，适用于精确匹配目标值（如普通二分查找）
// while (left < right) + right = mid，适用于寻找边界，保证不跳过最小值

