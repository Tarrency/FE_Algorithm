/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 解法1：堆
function maxHeapify(arr, i, heapSize) {
    const l = i * 2 + 1
    const r = i * 2 + 2
    let largest = i

    if (l < heapSize && arr[l] > arr[largest]) {
        largest = l
    }
    if (r < heapSize && arr[r] > arr[largest]) {
        largest = r
    }
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        maxHeapify(arr, largest, heapSize)
    }
}

function buildMaxHeap(arr, heapSize) {
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, i, heapSize)
    }
}

// 找第k个大，建立一个大根堆，做 k−1 次删除操作后堆顶元素
function findKthLargestHeap(nums, k) {
    // 复制数组，避免修改原数组，不必须
    const arr = [...nums]
    let heapSize = arr.length

    buildMaxHeap(arr, heapSize)

    for (let i = arr.length - 1; i >= arr.length - k + 1; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapSize--
        maxHeapify(arr, 0, heapSize)
    }
    return arr[0]
}
// 时间复杂度：O(nlogn)
// 空间复杂度：O(logn)，即递归使用栈空间的空间代价

// 解法2：快排，双指针
function findKthLargest(nums, k) {
    const n = nums.length
    return quickselect(nums, 0, n - 1, n - k)
}

function quickselect(nums, l, r, k) {
    if (l === r) {
        return nums[k]
    }

    const partition = nums[l]
    let i = l
    let j = r

    while (i <= j) {
        while (nums[i] < partition) {
            i++
        }
        while (nums[j] > partition) {
            j--
        }
        if (i <= j) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
            j--
        }
    }

    if (k <= j) {
        return quickselect(nums, l, j, k)
    } else {
        return quickselect(nums, i, r, k)
    }
}
// 时间复杂度：O(n)
// 空间复杂度：O(logn)，递归使用栈空间的空间代价的期望为 O(logn)。

// @lc code=end

