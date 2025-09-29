/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums
    this.original = nums.slice()
}

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.nums = this.original.slice()
    return this.nums
}

/**
 * @return {number[]}
 */

// 每次从未处理的数组中随机取一个元素，然后把该元素放到数组的尾部
Solution.prototype.shuffle = function() {
    let temp, random
    let len = this.nums.length
    while (len) {
        random = Math.floor(Math.random() * len)
        len--
        temp = arr[len]
        arr[len] = arr[random]
        arr[random] = temp
    }
    return arr
}
// 时间复杂度：
// 初始化：O(n)，其中 n 为数组中的元素数量。我们需要 O(n) 来初始化 original。
// reset：O(n)。我们需要 O(n) 将 original 复制到 nums。
// shuffle：O(n)。我们只需要遍历 n 个元素即可打乱数组。
// 空间复杂度：O(n)。记录初始状态需要存储 n 个元素。

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

