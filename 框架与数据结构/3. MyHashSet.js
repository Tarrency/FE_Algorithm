/*
 * @lc app=leetcode.cn id=705 lang=javascript
 *
 * [705] 设计哈希集合
 */

// @lc code=start

// 解法1：链地址法
// 解决哈希冲突：创建固定数量（质数）的桶组成数组，每个桶是一个链表结构，通过哈希函数将元素映射到特定桶中，在对应的链表内完成元素的增删查操作。
var MyHashSet = function() {
    this.BASE = 769 // 适合的质数
    this.data = new Array(this.BASE).fill(0).map(() => [])
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const hash = this.hash(key)
    if (this.data[hash].includes(key)) {
        return
    } else {
        this.data[hash].push(key)
    }
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const hash = this.hash(key)
    for (let i = 0; i < this.data[hash].length; i++) {
        if (this.data[hash][i] === key) {
            this.data[hash].splice(i, 1)
            break
        }
    }
}

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const hash = this.hash(key)
    return this.data[hash].includes(key)
}

MyHashSet.prototype.hash = function(key) {
    return key % this.BASE
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

