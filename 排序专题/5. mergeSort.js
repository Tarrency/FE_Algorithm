/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param numbers int整型一维数组
 * @return int整型一维数组
 *
 * 归并排序
 * 分治策略
 * 划分阶段：通过递归不断地将数组从中点处分开
 * 合并阶段：当子数组长度为 1 时终止划分，开始合并，持续地将左右两个较短的有序数组合并为一个较长的有序数组，直至结束
 *
 * 时间复杂度O(nlogn)，空间复杂度O(n)
 * 稳定排序
 *
 */

/* 合并左子数组和右子数组 */
function merge(nums, left, mid, right) {
    // 左子数组区间为 [left, mid], 右子数组区间为 [mid+1, right]
    // 创建一个临时数组 tmp ，用于存放合并后的结果
    const tmp = new Array(right - left + 1)
    // 初始化左子数组和右子数组的起始索引
    let i = left
    let j = mid + 1
    let k = 0
    // 当左右子数组都还有元素时，进行比较并将较小的元素复制到临时数组中
    while (i <= mid && j <= right) {
        if (nums[i] <= nums[j]) {
            tmp[k++] = nums[i++]
        } else {
            tmp[k++] = nums[j++]
        }
    }
    // 将左子数组和右子数组的剩余元素复制到临时数组中
    while (i <= mid) {
        tmp[k++] = nums[i++]
    }
    while (j <= right) {
        tmp[k++] = nums[j++]
    }
    // 将临时数组 tmp 中的元素复制回原数组 nums 的对应区间
    for (k = 0; k < tmp.length; k++) {
        nums[left + k] = tmp[k]
    }
}

/* 归并排序 */
function mergeSort(nums, left, right) {
    // 终止条件
    if (left >= right) return // 当子数组长度为 1 时终止递归
    // 划分阶段
    const mid = Math.floor(left + (right - left) / 2) // 计算中点
    mergeSort(nums, left, mid) // 递归左子数组
    mergeSort(nums, mid + 1, right) // 递归右子数组
    // 合并阶段
    merge(nums, left, mid, right)
}
