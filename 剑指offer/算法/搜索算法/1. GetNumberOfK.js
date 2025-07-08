/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @param k int整型
 * @return int整型
 *
 * 数字在升序数组中出现的次数
 * 输入：[1,2,3,3,3,3,4,5],3
 * 返回值：4
 * 要求：空间复杂度 O(1)，时间复杂度 O(logn)
 */
function GetNumberOfK(nums, k) {
    // write code here
    if (!nums.length) return 0
    // 插入位置指针
    function binary(nums, k) {
        let left = 0
        let right = nums.length - 1
        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            if (nums[mid] < k) {
                left = mid + 1
            } else if (nums[mid] > k) {
                right = mid - 1
            }
        }
        return left
    }
    return binary(nums, k + 0.5) - binary(nums, k - 0.5)
}
