/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param numbers int整型一维数组
 * @return int整型一维数组
 *
 * 堆排序
 * 基于堆数据结构
 * 输入数组并建立大顶堆。完成后，最大元素位于堆顶。
 * 不断执行出堆操作，依次记录出堆元素，即可得到从小到大排序的序列。
 *
 * 输入数组并建立大顶堆。完成后，最大元素位于堆顶。
 * 将堆顶元素（第一个元素）与堆底元素（最后一个元素）交换。完成交换后，堆的长度减 ，已排序元素数量加1
 * 从堆顶元素开始，从顶到底执行堆化操作（sift down）。完成堆化后，堆的性质得到修复
 *
 * 时间复杂度O(nlogn)，空间复杂度O(1)
 * 不稳定排序
 *
 */

/* 堆的长度为 n ，从节点 i 开始，从顶至底堆化 */
function siftDown(nums, n, i) {
    while (true) {
        // 判断节点 i, l, r 中值最大的节点，记为 max
        const l = 2 * i + 1
        const r = 2 * i + 2
        let max = i
        if (l < n && nums[l] > nums[ma]) {
            max = l
        }
        if (r < n && nums[r] > nums[ma]) {
            max = r
        }
        // 若节点 i 最大或索引 l, r 越界，则无须继续堆化，跳出
        if (max === i) {
            break
        }
        // 交换两节点
        [nums[i], nums[max]] = [nums[max], nums[i]]
        // 循环向下堆化
        i = max
    }
}

/* 堆排序 */
function heapSort(nums) {
    // 建堆操作：堆化除叶节点以外的其他所有节点
    for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
        siftDown(nums, nums.length, i)
    }
    // 从堆中提取最大元素，循环 n-1 轮
    for (let i = nums.length - 1; i > 0; i--) {
        // 交换根节点与最右叶节点（交换首元素与尾元素）
        [nums[0], nums[i]] = [nums[i], nums[0]]
        // 以根节点为起点，从顶至底进行堆化
        siftDown(nums, i, 0)
    }
}
