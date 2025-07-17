/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @return int整型
 *
 * 数组中的逆序对
 * 输入：[1,2,3,4,5,6,7,0]
 * 返回值：7
 */
var reversePairs = function(nums) {
    let count = 0
    // 如果数组中只有1个元素或者为空，则不存在逆序对
    if (nums.length < 2) return count
    const mergeSort = (front, behind) => {
    // 如果前后指针相遇，则归并区间只剩下一个元素了
        if (front === behind) return [nums[front]]
        const mid = front + ((behind - front) >> 1)
        // 规则让左半部分不包含中心元素 右半部分包含中心元素
        const left = mergeSort(front, mid)
        const right = mergeSort(mid + 1, behind)
        const temp = new Array(behind - front + 1).fill(0)
        // 合并有三个指针
        let cur = 0
        let l = 0
        let r = 0
        while (l < left.length && r < right.length) {
            // 如果右边元素大于左边元素，将左边元素放到结果数组中
            if (right[r] >= left[l]) temp[cur++] = left[l++]
            else {
                temp[cur++] = right[r++]
                // 如果左边元素大于右边元素，那就出现了序列对了
                // 由于左右两边都是有序的，左边当前元素及之后的元素都会跟右边构建逆序对
                count += left.length - l
            }
        }
        while (l < left.length) temp[cur++] = left[l++] // 如果 left 数组还有剩余元素（即 right 数组已经全部合并完），直接将剩余元素放入 temp
        while (r < right.length) temp[cur++] = right[r++]
        return temp
    }
    // 左闭右闭区间
    mergeSort(0, nums.length - 1)
    return count
}
// 时间复杂度：同归并排序 O(nlogn)
// 空间复杂度：O(n)
