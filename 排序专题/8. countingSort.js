/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param numbers int整型一维数组
 * @return int整型一维数组
 *
 * 计数排序
 * 统计元素数量
 * 遍历数组，找出其中的最大数字，记为m ，然后创建一个长度为m+1的辅助数组 counter
 * 借助 counter 统计 nums 中各数字的出现次数，其中 counter[num] 对应数字 num 的出现次数
 * 由于 counter 的各个索引天然有序，因此相当于所有数字已经排序好了。遍历 counter，根据各数字出现次数从小到大的顺序填入 nums
 *
 * 计数排序只适用于非负整数，数据量大但数据范围较小的情况
 *
 * 时间复杂度O(n)，空间复杂度O(n)
 * 稳定排序
 *
 */

function countingSort(nums) {
    // 1. 统计数组最大元素 m
    const m = Math.max(...nums)
    // 2. 统计各数字的出现次数
    // counter[num] 代表 num 的出现次数
    const counter = new Array(m + 1).fill(0)
    for (const num of nums) {
        counter[num]++
    }
    // 3. 求 counter 的前缀和，将“出现次数”转换为“尾索引”
    // 即 counter[num]-1 是 num 在 res 中最后一次出现的索引
    for (let i = 0; i < m; i++) {
        counter[i + 1] += counter[i]
    }
    // 4. 倒序遍历 nums ，将各元素填入结果数组 res
    // 初始化数组 res 用于记录结果
    const n = nums.length
    const res = new Array(n)
    for (let i = n - 1; i >= 0; i--) {
        const num = nums[i]
        res[counter[num] - 1] = num // 将 num 放置到对应索引处
        counter[num]-- // 令前缀和自减 1 ，得到下次放置 num 的索引
    }
    // 使用结果数组 res 覆盖原数组 nums
    for (let i = 0; i < n; i++) {
        nums[i] = res[i]
    }
}
