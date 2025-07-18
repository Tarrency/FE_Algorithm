/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param numbers int整型一维数组
 * @return int整型一维数组
 *
 * 选择排序
 * 开启一个循环，每轮从未排序区间选择最小的元素，将其放到已排序区间的末尾
 * 时间复杂度O(n^2)，空间复杂度O(1)
 * 非稳定排序，元素 nums[i] 有可能被交换至与其相等的元素的右边，导致两者的相对顺序发生改变
 */

function selectionSort(nums) {
    const n = nums.length
    // 外循环：未排序区间为 [i, n-1]
    for (let i = 0; i < n - 1; i++) {
        // 内循环：找到未排序区间内的最小元素
        let k = i
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[k]) {
                k = j // 记录最小元素的索引
            }
        }
        // 将该最小元素与未排序区间的首个元素交换
        [nums[i], nums[k]] = [nums[k], nums[i]]
    }
}
