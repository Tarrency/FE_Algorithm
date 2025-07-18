/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param input int整型一维数组
 * @param k int整型
 * @return int整型一维数组
 *
 * 最小的k个数
 *
 * 输入：[1,3,5,7,2,4,6,8],4
 * 返回值：[1,2,3,4]
 */
function GetLeastNumbers_Solution(input, k) {
    // write code here
}

// 解法1：sort
var smallestK = function(arr, k) {
    arr.sort((a, b) => a - b)
    return arr.slice(0, k)
}
// 时间复杂度：O(nlogn)，空间复杂度：O(logn)

// 解法2：堆
// 默认最大堆
const defaultCmp = (x, y) => x > y
// 交换元素
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]])
// 堆类，默认最大堆
class Heap {
    constructor(cmp = defaultCmp) {
        this.container = []
        this.cmp = cmp
    }
    // 插入
    insert(data) {
        const { container, cmp } = this
        container.push(data)
        let index = this.size() - 1
        while (index) {
            const parent = (index - 1) >> 1
            if (!cmp(container[index], container[parent])) {
                return
            }
            swap(container, index, parent)
            index = parent
        }
    }
    // 弹出堆顶，并返回
    pop() {
        const { container, cmp } = this
        if (!this.size()) {
            return null
        }

        swap(container, 0, this.size() - 1)
        const res = container.pop()
        const length = this.size()
        let index = 0
        let exchange = index * 2 + 1

        while (exchange < length) {
            // // 以最大堆的情况来说：如果有右节点，并且右节点的值大于左节点的值
            const right = index * 2 + 2
            if (right < length && cmp(container[right], container[exchange])) {
                exchange = right
            }
            if (!cmp(container[exchange], container[index])) {
                break
            }
            swap(container, exchange, index)
            index = exchange
            exchange = index * 2 + 1
        }

        return res
    }
    // 获取堆大小
    size() {
        return this.container.length
    }
    // 获取堆顶
    peek() {
        if (this.size()) return this.container[0]
        return null
    }
}

// 解法2：堆
const smallestKHeap = (arr, k) => {
    const minHeap = new Heap((x, y) => x < y)
    for (const num of arr) {
        minHeap.insert(num)
    }
    const res = []
    for (let i = 0; i < k; i++) {
        res.push(minHeap.pop())
    }
    return res
}

// 解法3：快排
var smallestKQuick = function(arr, k) {
    randomizedSelected(arr, 0, arr.length - 1, k)
    return arr.slice(0, k)
}

const randomizedSelected = (arr, l, r, k) => {
    if (l >= r) {
        return
    }
    const pos = randomizedPartition(arr, l, r)
    const num = pos - l + 1
    if (k === num) {
        return
    } else if (k < num) {
        randomizedSelected(arr, l, pos - 1, k)
    } else {
        randomizedSelected(arr, pos + 1, r, k - num)
    }
}

// 基于随机的划分
const randomizedPartition = (nums, l, r) => {
    const i = parseInt(Math.random() * (r - l + 1)) + l
    swap(nums, r, i)
    return partition(nums, l, r)
}

const partition = (nums, l, r) => {
    const pivot = nums[r]
    let i = l - 1
    for (let j = l; j <= r - 1; ++j) {
        if (nums[j] <= pivot) {
            i = i + 1
            swap(nums, i, j)
        }
    }
    swap(nums, i + 1, r)
    return i + 1
}

const swapQ = (nums, i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]]
}
