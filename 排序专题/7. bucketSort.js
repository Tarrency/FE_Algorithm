/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param numbers int整型一维数组
 * @return int整型一维数组
 *
 * 桶排序
 * 设置一些具有大小顺序的桶，每个桶对应一个数据范围，将数据平均分配到各个桶中；然后，在每个桶内部分别执行排序；最终按照桶的顺序将所有数据合并
 *
 * 时间复杂度O(n)，空间复杂度O(n)
 * 不稳定排序
 *
 */

function bucketSort(nums) {
    // 初始化 k = n/2 个桶，预期向每个桶分配 2 个元素
    const k = nums.length / 2
    const buckets = []
    for (let i = 0; i < k; i++) {
        buckets.push([])
    }
    // 1. 将数组元素分配到各个桶中
    for (const num of nums) {
        // 输入数据范围为 [0, 1)，使用 num * k 映射到索引范围 [0, k-1]
        const i = Math.floor(num * k)
        // 将 num 添加进桶 i
        buckets[i].push(num)
    }
    // 2. 对各个桶执行排序
    for (const bucket of buckets) {
        // 使用内置排序函数，也可以替换成其他排序算法
        bucket.sort((a, b) => a - b)
    }
    // 3. 遍历桶合并结果
    let i = 0
    for (const bucket of buckets) {
        for (const num of bucket) {
            nums[i++] = num
        }
    }
}
