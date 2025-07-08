/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param target int整型
 * @param array int整型二维数组
 * @return bool布尔型
 *
 * 二维数组中的查找
 * 每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序
 * 输入：7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
 * 返回值：true
* 要求：空间复杂度 O(1) ，时间复杂度 O(n+m)
 */

// 解法1：二分，从右上角开始查找（当前行的最大值、当前列最小值）
function Find(target, array) {
    // write code here
    if (!array.length || !array[0].length) {
        return false
    }
    let row = 0
    let col = array[0].length - 1
    while (row < array.length && col >= 0) {
        const cur = array[row][col]
        if (cur === target) {
            return true
        } else if (cur > target) {
            col-- // 向左移动
        } else {
            row++ // 向下移动
        }
    }
    return false
}
