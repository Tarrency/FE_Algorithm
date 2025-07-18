/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param numbers int整型一维数组
 * @return int整型一维数组
 *
 * 冒泡排序
 * 连续地比较与交换相邻元素
 * 最差时间复杂度和平均时间复杂度O(n^2)，输入数组完全有序时，flag版本可达到最佳时间复杂度O(n)，空间复杂度O(1)
 * 稳定排序：遇到相等元素不交换
 */

function bubbleSort(nums) {
    // 外循环：未排序区间为 [0, i]
    for (let i = nums.length - 1; i > 0; i--) {
        // 内循环：将未排序区间 [0, i] 中的最大元素交换至该区间的最右端
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                // 交换 nums[j] 与 nums[j + 1]
                const tmp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = tmp
            }
        }
    }
}

function bubbleSortWithFlag(nums) {
    // 外循环：未排序区间为 [0, i]
    for (let i = nums.length - 1; i > 0; i--) {
        let flag = false // 初始化标志位
        // 内循环：将未排序区间 [0, i] 中的最大元素交换至该区间的最右端
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                // 交换 nums[j] 与 nums[j + 1]
                const tmp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = tmp
                flag = true // 记录交换元素
            }
        }
        if (!flag) break // 此轮“冒泡”未交换任何元素，直接跳出
    }
}
