/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start

// 计算的中位数，就来自最大堆中的最大值，以及最小堆中的最小值。left 是最大堆，right 是最小堆。
var MedianFinder = function() {
    this.left = new MaxPriorityQueue()
    this.right = new MinPriorityQueue()
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.left.size() === this.right.size()) {
        this.right.enqueue(num)
        this.left.enqueue(this.right.dequeue()) // 保持左比右多1个
    } else {
        this.left.enqueue(num) // 左比右多2个，吐一个最大给右
        this.right.enqueue(this.left.dequeue())
    }
}

/**
 * @return {number}
 */
// 如果当前有奇数个元素，中位数是 left 的堆顶。如果当前有偶数个元素，中位数是 left 的堆顶和 right 的堆顶的平均值。
MedianFinder.prototype.findMedian = function() {
    if (this.left.size() > this.right.size()) {
        return this.left.front()
    }
    return (this.left.front() + this.right.front()) / 2
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

