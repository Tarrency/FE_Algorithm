/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param numbers int整型一维数组
 * @return int整型一维数组
 *
 * 快速排序
 * 哨兵划分，选择数组中的某个元素作为“基准数”，将所有小于基准数的元素移到其左侧，而大于基准数的元素移到其右侧
 * 时间复杂度O(nlogn)，最差O(n^2)，空间复杂度O(n)
 * 非稳定排序：在哨兵划分的最后一步，基准数可能会被交换至相等元素的右侧
 *
 * 效率更高
 */
function quickSort(nums, left, right) {
    // 子数组长度为 1 时终止递归
    if (left >= right) return
    // 哨兵划分
    const pivot = this.partition(nums, left, right)
    // 递归左子数组、右子数组
    this.quickSort(nums, left, pivot - 1)
    this.quickSort(nums, pivot + 1, right)
}

function swap(nums, i, j) {
    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
}

/* 哨兵划分 */
function partition(nums, left, right) {
    // 以 nums[left] 为基准数
    let i = left
    let j = right
    while (i < j) {
        while (i < j && nums[j] >= nums[left]) {
            j -= 1 // 从右向左找首个小于基准数的元素
        }
        while (i < j && nums[i] <= nums[left]) {
            i += 1 // 从左向右找首个大于基准数的元素
        }
        // 元素交换
        this.swap(nums, i, j) // 交换这两个元素
    }
    this.swap(nums, i, left) // 将基准数交换至两子数组的分界线
    return i // 返回基准数的索引
}

/* 哨兵划分优化
    选取三个候选元素（通常为数组的首、尾、中点元素），并将这三个候选元素的中位数作为基准数
 */

/* 选取三个候选元素的中位数 */
function medianThree(nums, left, mid, right) {
    const l = nums[left]
    const m = nums[mid]
    const r = nums[right]
    // m 在 l 和 r 之间
    if ((l <= m && m <= r) || (r <= m && m <= l)) return mid
    // l 在 m 和 r 之间
    if ((m <= l && l <= r) || (r <= l && l <= m)) return left
    return right
}

/* 哨兵划分（三数取中值） */
function partitionMedianThree(nums, left, right) {
    // 选取三个候选元素的中位数
    const med = this.medianThree(
        nums,
        left,
        Math.floor((left + right) / 2),
        right
    )
    // 将中位数交换至数组最左端
    this.swap(nums, left, med)
    // 以 nums[left] 为基准数
    let i = left
    let j = right
    while (i < j) {
        while (i < j && nums[j] >= nums[left]) j-- // 从右向左找首个小于基准数的元素
        while (i < j && nums[i] <= nums[left]) i++ // 从左向右找首个大于基准数的元素
        this.swap(nums, i, j) // 交换这两个元素
    }
    this.swap(nums, i, left) // 将基准数交换至两子数组的分界线
    return i // 返回基准数的索引
}
