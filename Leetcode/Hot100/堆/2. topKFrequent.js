/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 解法1：小顶堆
// size为k的小顶堆，因为要统计最大前k个元素，只有小顶堆每次将最小的元素弹出，最后小顶堆里积累的才是前k个最大元素
function topKFrequentHeapOptimized(nums, k) {
    // 1. 统计频率
    const freqMap = new Map()
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }

    // 2. 构建大小为k的最小堆
    const minHeap = []

    for (const [num, freq] of freqMap.entries()) {
        if (minHeap.length < k) {
            minHeap.push([num, freq])
            // 如果堆满了，需要构建堆
            if (minHeap.length === k) {
                buildMinHeapForFreq(minHeap, k)
            }
        } else {
            // 如果新元素的频率大于堆顶（最小频率）
            if (freq > minHeap[0][1]) {
                minHeap[0] = [num, freq]
                minHeapifyForFreq(minHeap, 0, k)
            }
        }
    }

    // 3. 提取结果
    return minHeap.map(item => item[0])
}

// 最小堆调整（按频率比较）
function minHeapifyForFreq(arr, i, heapSize) {
    const l = i * 2 + 1
    const r = i * 2 + 2
    let smallest = i

    if (l < heapSize && arr[l][1] < arr[smallest][1]) {
        smallest = l
    }
    if (r < heapSize && arr[r][1] < arr[smallest][1]) {
        smallest = r
    }
    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
        minHeapifyForFreq(arr, smallest, heapSize)
    }
}

// 构建最小堆（按频率）
function buildMinHeapForFreq(arr, heapSize) {
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        minHeapifyForFreq(arr, i, heapSize)
    }
}

// 解法2：大顶堆
// 取前k个堆顶元素，弹出k个堆顶元素
function topKFrequentHeap(nums, k) {
    // 1. 统计频率
    const freqMap = new Map()
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }

    // 2. 转换为[数字, 频率]数组
    const freqArray = Array.from(freqMap.entries())
    let heapSize = freqArray.length

    // 3. 构建最大堆（按频率）
    buildMaxHeapForFreq(freqArray, heapSize)

    // 4. 提取前k个最高频元素
    const result = []
    for (let i = 0; i < k; i++) {
        // 将堆顶（当前最大频率）移到结果数组
        result.push(freqArray[0][0]);

        // 将堆顶与最后一个元素交换，并缩小堆大小
        [freqArray[0], freqArray[heapSize - 1]] = [freqArray[heapSize - 1], freqArray[0]]
        heapSize--

        // 重新调整堆
        maxHeapifyForFreq(freqArray, 0, heapSize)
    }

    return result
}

// 最大堆调整（按频率比较）
function maxHeapifyForFreq(arr, i, heapSize) {
    const l = i * 2 + 1
    const r = i * 2 + 2
    let largest = i

    if (l < heapSize && arr[l][1] > arr[largest][1]) {
        largest = l
    }
    if (r < heapSize && arr[r][1] > arr[largest][1]) {
        largest = r
    }
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        maxHeapifyForFreq(arr, largest, heapSize)
    }
}

// 构建最大堆（按频率）
function buildMaxHeapForFreq(arr, heapSize) {
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        maxHeapifyForFreq(arr, i, heapSize)
    }
}

// 解法3：
// @lc code=end

