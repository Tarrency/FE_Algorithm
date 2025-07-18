/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param numbers int整型一维数组
 * @return int整型一维数组
 *
 * 基数排序
 * 基数排序利用数字各位之间的递进关系，依次对每一位进行排序
 *
 * 适用于数值范围较大，前提是数据必须可以表示为固定位数的格式，且位数不能过大
 *
 * 时间复杂度O(nk)，空间复杂度O(n)
 * 稳定排序
 *
 */

/* 获取元素 num 的第 k 位，其中 exp = 10^(k-1) */
function digit(num, exp) {
    // 传入 exp 而非 k 可以避免在此重复执行昂贵的次方计算
    return Math.floor(num / exp) % 10
}

/* 计数排序（根据 nums 第 k 位排序） */
function countingSortDigit(nums, exp) {
    // 十进制的位范围为 0~9 ，因此需要长度为 10 的桶数组
    const counter = new Array(10).fill(0)
    const n = nums.length
    // 统计 0~9 各数字的出现次数
    for (let i = 0; i < n; i++) {
        const d = digit(nums[i], exp) // 获取 nums[i] 第 k 位，记为 d
        counter[d]++ // 统计数字 d 的出现次数
    }
    // 求前缀和，将“出现个数”转换为“数组索引”
    for (let i = 1; i < 10; i++) {
        counter[i] += counter[i - 1]
    }
    // 倒序遍历，根据桶内统计结果，将各元素填入 res
    const res = new Array(n).fill(0)
    for (let i = n - 1; i >= 0; i--) {
        const d = digit(nums[i], exp)
        const j = counter[d] - 1 // 获取 d 在数组中的索引 j
        res[j] = nums[i] // 将当前元素填入索引 j
        counter[d]-- // 将 d 的数量减 1
    }
    // 使用结果覆盖原数组 nums
    for (let i = 0; i < n; i++) {
        nums[i] = res[i]
    }
}

/* 基数排序 */
function radixSort(nums) {
    // 获取数组的最大元素，用于判断最大位数
    const m = Math.max(... nums)
    // 按照从低位到高位的顺序遍历
    for (let exp = 1; exp <= m; exp *= 10) {
        // 对数组元素的第 k 位执行计数排序
        // k = 1 -> exp = 1
        // k = 2 -> exp = 10
        // 即 exp = 10^(k-1)
        countingSortDigit(nums, exp)
    }
}
