/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param num int整型一维数组
 * @param size int整型
 * @return int整型一维数组
 *
 * 滑动窗口的最大值
 * 输入：[2,3,4,2,6,2,5,1],3
 * 返回值：[4,4,6,6,6,5]
 */

// 解法1：暴力，滑动窗口
// 设置两个指针i和j，i指向0，j指向size-1，取出i到j之间几个数放进临时数组，用求得最大值，然后i++，j++，直到j===len-1
function maxInWindows(num, size) {
    const len = num.length
    if (size > len || size === 0) { return [] }
    let i = 0
    let j = size - 1
    const resArr = []
    while (j < len) {
        const temp = num.slice(i, j + 1)
        resArr.push(Math.max(...temp))
        i++
        j++
    }
    return resArr
}
// 时间复杂度 O(n²)，空间复杂度O(1)

// 解法2：单调（递减）队列，双端（两端都可以出入）队列
var maxSlidingWindow = function(nums, k) {
    const res = []
    const queue = [] // 存储元素索引，维护单调递减队列
    for (let i = 0; i < nums.length; i++) {
        // 移除窗口外的元素,意思就是最大值如果不在滑动窗口内部就去掉他，同时每次移动一步，所以只需要判断一次。
        if (queue.length > 0 && queue[0] < i - k + 1) {
            queue.shift()
        }
        // 维护单调递减队列，移除比当前值小的元素
        while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[i]) {
            queue.pop()
        }
        queue.push(i)
        // 记录窗口最大值（窗口形成后）
        if (i >= k - 1) {
            ans.push(nums[queue[0]])
        }
    }
    return res
}
// 时间复杂度：O(n)，空间复杂度O(K)
/*
	1.	维护一个双端队列 queue，使得队列中的索引对应的 nums 值是 单调递减 的。
	2.	每次滑动窗口时：
	3.	先移除队列中不在窗口范围内 的元素（i - k) 之前的。
    4.	再从队列尾部移除比当前 nums[i] 小的元素，保证队列单调递减。
	5.	队列头部元素始终是窗口内的最大值，存入 ans[]。
*/

// 解法3：堆（优先队列）
var maxSlidingWindowWithHeap = function(nums, k) {
    if (k === 1) return nums
    if (nums.length === k) return [Math.max(...nums)]
    // 大根堆 滑动窗口
    const res = []
    // 创建一个大根堆
    const heap = new Heap((a, b) => {
        return a[0] > b[0]
    })
    for (let i = 0; i < nums.length; i++) {
        if (i < k) {
            // 储存 （值、坐标） 到大根堆
            heap.push([nums[i], i])
            // 如果添加到堆中的数据等于窗口大小
            // 把堆顶的值添加到res
            if (heap.size() === k) {
                res.push(heap.peek()[0])
            }
        } else {
            // 判断堆顶的值坐标是否在窗口中，如果不在就删除堆顶
            while (heap.peek()[1] <= i - k) {
                heap.pop()
            }
            // 继续添加右边的值到堆中
            heap.push([nums[i], i])
            // 把堆顶的值添加到res
            res.push(heap.peek()[0])
        }
    }
    return res
}
// 时间复杂度：O(nlogn)，空间复杂度：O(n)

// 堆数据结构
function Heap(func) {
    // 功能？
    // 自定义比较函数
    // 插入
    // 删除堆顶
    // 获取堆顶
    // 获取堆大小

    // 上浮 up   ：如果当前节点比它的父节点还小，则与父节点交换位置，当前节点在数组位置上升
    // 下沉 down ：如果当前节点比它的子节点还大，则与子节点交换位置，当前节点在数组位置下降
    this.heap = [null] // 下标0废弃，从1开始好计算
    // 左子节点 2i 右子节点 2i+1
    // 父节点 Math.floor(i/2)

    const defaultFunc = (a, b) => {
        return a > b
    }
    this.compare = typeof func === 'function' ? func : defaultFunc
    // 交换
    Heap.prototype.swap = (x, y) => {
        const t = this.heap[x]
        this.heap[x] = this.heap[y]
        this.heap[y] = t
    }
    // 上浮
    Heap.prototype.up = (k) => {
        const { heap, parent, compare, swap } = this
        // 迭代交换当前节点与父节点
        while (k > 1 && compare(heap[k], heap[parent(k)])) {
            // 交换位置
            swap(parent(k), k)
            // 赋值k为父节点，k再与父节点的父节点对比，层层对比交换（上浮）
            k = parent(k)
        }
    }
    // 下沉
    Heap.prototype.down = (k) => {
        const { heap, left, right, compare, swap } = this
        const size = this.size()
        // 判断左子节点坐标是否存在堆中
        while (left(k) <= size) {
            // 储存待交换的坐标
            let t = left(k)
            // 判断右子节点坐标是否存在堆中
            const r = right(k)
            if (right(k) <= size && compare(heap[r], heap[t])) {
                t = right(k)
            }
            // 如果当前坐标值（大于/小于）待交换坐标值，则中断下沉操作
            if (compare(heap[k], heap[t])) return
            // 交换值
            swap(k, t)
            // 继续下沉
            k = t
        }
    }
    // 获取子节点左边坐标
    Heap.prototype.left = (x) => {
        return 2 * x
    }
    // 获取子节点右边坐标
    Heap.prototype.right = (x) => {
        return 2 * x + 1
    }
    // 获取父节点坐标
    Heap.prototype.parent = (x) => {
        return Math.floor(x / 2)
    }

    // 添加值
    this.push = (val) => {
        // 堆尾添加新值
        this.heap.push(val)
        // 上浮新值的位置
        this.up(this.heap.length - 1)
    }
    // 删除堆顶
    this.pop = () => {
        // 堆顶元素与堆尾元素交换
        this.swap(1, this.heap.length - 1)
        // 然后删除堆尾
        const top = this.heap.pop()
        // 下沉交换后的堆顶值位置
        this.down(1)
        return top
    }
    // 获取堆顶
    this.peek = () => {
        return this.heap[1]
    }
    // 获取堆大小
    this.size = () => {
        return this.heap.length - 1
    }
}

class HeapClass {
    /**
   * 堆构造函数
   * @param {Function} compareFn 自定义比较函数，决定是大根堆还是小根堆
   *                            默认 (a, b) => a > b 是大根堆
   *                            改为 (a, b) => a < b 则是小根堆
   */
    constructor(compareFn) {
        this.heap = [null] // 下标0不使用，从1开始方便计算父子节点关系
        this.compare = compareFn || ((a, b) => a > b) // 默认大根堆
    }

    /**
   * 获取父节点索引
   * @param {number} i 当前节点索引
   * @return {number} 父节点索引
   */
    parent(i) {
        return Math.floor(i / 2)
    }

    /**
   * 获取左子节点索引
   * @param {number} i 当前节点索引
   * @return {number} 左子节点索引
   */
    left(i) {
        return 2 * i
    }

    /**
   * 获取右子节点索引
   * @param {number} i 当前节点索引
   * @return {number} 右子节点索引
   */
    right(i) {
        return 2 * i + 1
    }

    /**
   * 交换两个节点的值
   * @param {number} i 第一个节点索引
   * @param {number} j 第二个节点索引
   */
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    /**
   * 上浮操作（调整新插入的节点位置）
   * @param {number} k 需要上浮的节点索引
   */
    up(k) {
        while (k > 1 && this.compare(this.heap[k], this.heap[this.parent(k)])) {
            this.swap(k, this.parent(k))
            k = this.parent(k)
        }
    }

    /**
   * 下沉操作（调整堆顶删除后的堆结构）
   * @param {number} k 需要下沉的节点索引
   */
    down(k) {
        const size = this.size()
        while (this.left(k) <= size) {
            let child = this.left(k)

            // 选择两个子节点中更大/更小的那个
            if (child + 1 <= size && this.compare(this.heap[child + 1], this.heap[child])) {
                child++
            }

            // 如果当前节点已经满足堆性质，停止下沉
            if (this.compare(this.heap[k], this.heap[child])) {
                break
            }

            this.swap(k, child)
            k = child
        }
    }

    /**
   * 向堆中插入元素
   * @param {*} val 要插入的值
   */
    push(val) {
        this.heap.push(val)
        this.up(this.size())
    }

    /**
   * 删除并返回堆顶元素
   * @return {*} 堆顶元素
   */
    pop() {
        if (this.size() === 0) return null
        const top = this.heap[1]
        this.heap[1] = this.heap.pop()
        this.down(1)
        return top
    }

    /**
   * 获取堆顶元素（不删除）
   * @return {*} 堆顶元素
   */
    peek() {
        return this.heap[1] || null
    }

    /**
   * 获取堆的大小
   * @return {number} 堆中元素数量
   */
    size() {
        return this.heap.length - 1
    }

    /**
   * 检查堆是否为空
   * @return {boolean} 是否为空
   */
    isEmpty() {
        return this.size() === 0
    }
}
