/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */

// 解法1：map
var LRUCache = function(capacity) {
    this.limit = capacity
    this.cache = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) {
        return -1
    }
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value) // 放到 Map 的末尾，代表“最近使用”
    return value
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.cache.delete(key)
    this.cache.set(key, value)
    if (this.cache.size > this.limit) {
        const oldestKey = this.cache.keys().next().value // keys: [1,2,3]迭代器，指针在1前面，.next()指针指向1，返回1的对象{key: 1, value: 1v}
        this.cache.delete(oldestKey)
    }
}

// 解法2：哈希+双向链表
class ListNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}

class LRUCacheMap {
    constructor(capacity) {
        this.capacity = capacity
        this.hash = new Map() // 用 Map 代替 {}
        this.dummyHead = new ListNode()
        this.dummyTail = new ListNode()
        this.dummyHead.next = this.dummyTail
        this.dummyTail.prev = this.dummyHead
    }

    get(key) {
        if (!this.hash.has(key)) return -1
        const node = this.hash.get(key)
        this.moveToHead(node)
        return node.value
    }

    put(key, value) {
        if (this.hash.has(key)) {
            // 更新已有节点
            const node = this.hash.get(key)
            node.value = value
            this.moveToHead(node)
        } else {
            // 超容量 -> 淘汰
            if (this.hash.size === this.capacity) {
                this.removeLRUItem()
            }
            const newNode = new ListNode(key, value)
            this.hash.set(key, newNode)
            this.addToHead(newNode)
        }
    }

    moveToHead(node) {
        this.removeFromList(node)
        this.addToHead(node)
    }

    addToHead(node) {
        node.prev = this.dummyHead
        node.next = this.dummyHead.next
        this.dummyHead.next.prev = node
        this.dummyHead.next = node
    }

    removeLRUItem() {
        const tail = this.popTail()
        this.hash.delete(tail.key)
    }

    popTail() {
        const tail = this.dummyTail.prev
        this.removeFromList(tail)
        return tail
    }

    removeFromList(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

