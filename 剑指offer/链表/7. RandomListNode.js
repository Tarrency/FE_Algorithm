
// 复杂链表的复制
// 复制值、next指向、random指向
function RandomListNode(x) {
    this.val = x
    this.next = null
    this.random = null
}
// 解法1：map的key值存储旧node，value值存储新node，返回value
function Clone(head) {
    if (!head) return head
    let node = head
    const map = new Map()

    // 复制节点，将新节点放入map中
    while (node) {
        map.set(node, new RandomListNode(node.val))
        node = node.next
    }
    node = head

    // 对map里的新节点进行遍历操作
    while (node) {
        map.get(node).next = map.get(node.next) || null // 如果 node.next === null，map.get(node.next) 会返回 undefined，null不是对象map不存储
        map.get(node).random = map.get(node.random)
        node = node.next
    }
    return map.get(head)
}
// 时间复杂度O(n),空间复杂度O(n)

// 解法2：复制节点到旧节点后面，处理random指向，拆分链表
var copyRandomList = function(head) {
    if (!head) return head
    let node = head

    // 复制节点，将新节点放到原节点后面
    while (node) {
        node.next = new Node(node.val, node.next)
        node = node.next.next
    }

    node = head
    // 构建新节点的random指向
    while (node) {
        if (node.random) node.next.random = node.random.next // 加.next让node复制节点的random指向 node的random的复制节点，即random的流向是复制节点指向复制节点
        node = node.next.next
    }

    // 拆分链表
    let newNode = head.next; node = head; res = newNode
    while (node.next && newNode.next) {
        node.next = node.next.next
        newNode.next = newNode.next.next
        node = node.next
        newNode = newNode.next
    }
    node.next = null

    // 返回新链表的头结点
    return res
}
